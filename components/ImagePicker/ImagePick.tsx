import ImagePicker from 'react-native-image-picker'; 
const ImagePick = () => {
    const options = {
        mediaType: 'photo',
        quality: 1,
        maxWidth: 500,
        maxHeight: 500,
      };
    
      return new Promise((resolve, reject) => {
        ImagePicker.showImagePicker(options,response => {
          if (response.didCancel) {
            reject('User cancelled image picker');
          } else if (response.errorCode) {
            reject('Image picker error: ' + response.error);
          } else { 
            resolve(response.assets[0].uri);
          }
        });
      });
    }

export default ImagePick