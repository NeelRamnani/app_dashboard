export const Status = {
  OK: 'OK',
  ERROR: 'ERROR'
};

export const GenerationStyle = {
  ANIME: '21',
  PORTRAIT: '26',
  REALISTIC: '29',
  IMAGINE_V1: '27',
  IMAGINE_V3: '28',
  IMAGINE_V4: '30',
  IMAGINE_V4_CREATIVE: '31',
  IMAGINE_V4_1: '32',
  // IMAGINE_V5: '33',
  // IMAGINE_V6_ALPHA: '39'
};

export const client = (apiKey) => {
  return {
    generations: async (prompt, options) => {
      try {
        const formData = new FormData();
        formData.append('prompt', prompt);
        formData.append('style_id', options.style);
        
        // Append other options if they exist
        if (options.aspectRatio) formData.append('aspect_ratio', options.aspectRatio);
        if (options.negativePrompt) formData.append('negative_prompt', options.negativePrompt);
        if (options.cfg) formData.append('cfg', options.cfg);
        if (options.seed) formData.append('seed', options.seed);
        if (options.steps) formData.append('steps', options.steps);

        const headers = new Headers();
        headers.append('Authorization', `Bearer ${apiKey}`);

        const requestOptions = {
          method: 'POST',
          headers: headers,
          body: formData,
        };

        const response = await fetch('https://api.vyro.ai/v1/imagine/api/generations', requestOptions);

        if (response.ok) {
          const contentType = response.headers.get('Content-Type');

          if (contentType && contentType.startsWith('image/')) {
            // Handle image response
            const blob = await response.blob();
            return {
              status: () => Status.OK,
              getOrThrow: () => blob,
              data: () => blob,
            };
          } else {
            // Handle other types of responses
            const result = await response.json();
            return {
              status: () => Status.ERROR,
              errorOrThrow: () => result.error,
            };
          }
        } else {
          const result = await response.json();
          console.error('Error response:', result);
          return {
            status: () => Status.ERROR,
            errorOrThrow: () => result.error,
          };
        }
      } catch (error) {
        console.error('Error:', error);
        return {
          status: () => Status.ERROR,
          errorOrThrow: () => error.message,
        };
      }
    }
  };
};