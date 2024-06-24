import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserSetting = () => {
  const [formData, setFormData] = useState({
    name: '',
    currentPassword: '',
    newPassword: '',
    passwordConfirmation: '',
  });
  const [csrfToken, setCsrfToken] = useState(null);
  const [bearerToken, setBearerToken] = useState(null);

  useEffect(() => {
    const csrfTokenElement = document.querySelector('meta[name="csrf-token"]');
    if (csrfTokenElement) {
      const token = csrfTokenElement.getAttribute('content');
      setCsrfToken(token);
    }

    const storedBearerToken = localStorage.getItem('bearerToken');
    if (storedBearerToken) {
      setBearerToken(storedBearerToken);
    }

    // Fetch user's name using the bearerToken from local storage
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setFormData(prevFormData => ({
        ...prevFormData,
        name: storedUserName,
      }));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('http://localhost:3000/users/update', {
        user: {
          name: formData.name,
          current_password: formData.currentPassword,
          password: formData.newPassword,
          password_confirmation: formData.passwordConfirmation,
        },
      }, {
        headers: {
          'X-CSRF-Token': csrfToken,
          'Authorization': `Bearer ${bearerToken}`,
        },
      });

      if (response.status === 200) {
        console.log('Profile updated successfully');
      } else {
        console.error('Error updating profile:', response.data.errors);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="ImaginAi_fn_content">
      <div className="ImaginAi_fn_page">
        <div className="ImaginAi_fn_user_settings_page">
          <div className="ImaginAi_fn_pagetitle">
            <h2 className="title">Settings</h2>
          </div>
          <div className="container small">
            <div className="ImaginAi_fn_user_settings">
              <form onSubmit={handleSubmit}>
                <div className="user__settings">
                  <div className="settings_right">
                    <div className="item">
                      <label className="input_label" htmlFor="name">
                        Name
                      </label>
                      <div className="input_item">
                        <input
                          className="input"
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          readOnly  // Make the input read-only
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <label className="input_label" htmlFor="currentPassword">
                        Current Password
                      </label>
                      <div className="input_item">
                        <input
                          className="input"
                          type="password"
                          id="currentPassword"
                          name="currentPassword"
                          value={formData.currentPassword}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <label className="input_label" htmlFor="newPassword">
                        New Password
                      </label>
                      <div className="input_item">
                        <input
                          className="input"
                          type="password"
                          id="newPassword"
                          name="newPassword"
                          value={formData.newPassword}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <label className="input_label" htmlFor="passwordConfirmation">
                        Confirm New Password
                      </label>
                      <div className="input_item">
                        <input
                          className="input"
                          type="password"
                          id="passwordConfirmation"
                          name="passwordConfirmation"
                          value={formData.passwordConfirmation}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <label className="fn__checkbox">
                        <input type="checkbox" />
                        I approve all changes
                        <span className="checkmark" />
                        <img src="svg/check.svg" alt="Check" className="fn__svg" />
                      </label>
                    </div>
                    <div className="item">
                      <label className="fn__submit">
                        <input type="submit" value="Save Changes" />
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSetting;
