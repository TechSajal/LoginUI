import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './styles';
import Test from '../../components/Text/Test';
import CommonButton from '../../components/button/Loginbutton/CommonButton';
import {ImageAssets} from '../../assets/images/imageAssets';
import Phoneno from '../../components/PhoneNo/Phoneno';
import DropDown from '../../components/Dropdown/DropDown';
import {IndexPath} from '@ui-kitten/components';
import {BloodGroup} from '../../components/Helper/data';
import colors from '../../styles/colors';
import en from '../../i18n/en';
import { ProfileProps } from './types';
const MyProfile = () => {
  const [state, setState] = useState({
    imageShown: false,
    name: '',
    phoneNumber: '',
    bloodGroup: new IndexPath(0),
  });
  const displayBloodGroup = BloodGroup[state.bloodGroup.row];
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.container}>
        <View style={styles.FirstContainer}>
          <View style={styles.BackContainer}>
            <Text style={styles.TextProfile}>{en.myprofile}</Text>
          </View>
          <View style={styles.image_container}>
            <View style={styles.ImageView}>
              {state.imageShown === false ? (
                <>
                  <Image
                    source={ImageAssets.User}
                    resizeMode="contain"
                    style={styles.Image}
                  />
                  <TouchableOpacity
                    onPress={() =>
                      setState(prevData => ({
                        ...prevData,
                        imageShown: true,
                      }))
                    }>
                    <Text style={styles.TextTakePic}>{en.takepicture}</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <TouchableOpacity
                    onPress={() =>
                      setState(prevData => ({
                        ...prevData,
                        imageShown: false,
                      }))
                    }
                    style={styles.touchableObacity}>
                    <Image
                      source={ImageAssets.UserProfile}
                      resizeMode="contain"
                      style={styles.image100}
                    />
                  </TouchableOpacity>
                </>
              )}
            </View>
          </View>
          <Test
          KeyboardType={null}
            Value="Akash Purohit"
            setValue={() => null}
            isMultiline={false}
            placeholder="Name"
            Heading={en.name}
            isEditAble={false}
            Output=""
          />
          <Test
          KeyboardType={null}
            Value="sajalkaushal3@gmail.com"
            setValue={() => null}
            isMultiline={false}
            placeholder="Email"
            Heading={en.email}
            isEditAble={false}
            Output=""
          />
          <View style={styles.PhoneNoContainer}>
            <Text style={styles.TextHeading}>Phone</Text>
            <View style={{width: 220}}>
              <Phoneno
                errors={''}
                phoneInput={null}
                value="9958969106"
                setValue={() => null}
                setFormattedValue={() => null}
              />
            </View>
          </View>
          <View style={styles.BloodGroupContainer}>
            <Text style={styles.TextHeading}>Blood Group</Text>
            <View style={{width: 220}}>
              <DropDown
                IsHeadingThere={false}
                heading=""
                data={BloodGroup}
                selectedIndex={state.bloodGroup}
                setSelectedIndex={(e: any) =>
                  setState(prefData => ({
                    ...prefData,
                    bloodGroup: e,
                  }))
                }
                displayvalue={displayBloodGroup}
              />
            </View>
          </View>
          <View style={styles.EmergencyContactContainer}>
            <Text style={styles.EmergencyContact}>{en.emergencycontact}</Text>
            <TouchableOpacity>
              <Text style={styles.SelectFromContact}>{en.selectfromlist}</Text>
            </TouchableOpacity>
          </View>

          <Test
            KeyboardType={null}
            Value={state.name}
            setValue={(e: any) =>
              setState(prefData => ({
                ...prefData,
                name: e,
              }))
            }
            isMultiline={false}
            placeholder="Enter Name"
            Heading={en.name}
            isEditAble={true}
            Output=""
          />
          <Test
           KeyboardType="phone-pad"
            Value={state.phoneNumber}
            setValue={(e: any) =>
              setState(prefData => ({
                ...prefData,
                phoneNumber: e,
              }))
            }
            isMultiline={false}
            placeholder="Enter Phone Number"
            Heading={en.phone}
            isEditAble={true}
            Output=""
          />
          <Test
          KeyboardType={null}
            Value="Accenture"
            setValue={() => null}
            isMultiline={false}
            placeholder="Company Name"
            Heading={en.companyname}
            isEditAble={false}
            Output=""
          />
          <Test
          KeyboardType={null}
            Value="Floor 5, TOWER B,Nucleus Prima,Powai,Mumbai,Maharashtra,India,400076"
            setValue={() => null}
            isMultiline={true}
            placeholder="Office Address"
            Heading={en.officeaddress}
            isEditAble={false}
            Output=""
          />
          <View style={styles.ButtonContainer}>
            <CommonButton
              marginTop={35}
              title="Save"
              size="large"
              width={289}
              height={44}
              color={colors.ProfileCommonButton}
              onpress={() => console.log(state)}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MyProfile;
