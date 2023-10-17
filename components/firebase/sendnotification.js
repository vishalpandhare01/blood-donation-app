import * as Notifications from "expo-notifications";
import React, { useEffect, useLayoutEffect } from "react";
import { Alert } from "react-native";
import messaging from "@react-native-firebase/messaging";
import axios from 'axios'
import {BASE_URL} from '../../core/baseurl'
import {EndPoints} from '../../core/endpoint'
import * as SecureStore from 'expo-secure-store';
import { schedulePushNotification } from "./notification";

export async function sendNotification() {
  const Dtoken = (await Notifications.getDevicePushTokenAsync({projectId:'blooddonationapp-16118'})).data;
 const token =  await  SecureStore.getItemAsync('secure_token'); 
  const headers = {
     token : token,
     "Content-Type": "multipart/form-data",
  };
console.log(BASE_URL + EndPoints.availabletoDonate)
  await axios
    .get(BASE_URL + EndPoints.availabletoDonate, { headers: headers })
    .then((res) => {
      console.log("firebse response", res.data.message);
      if(res.data.message === "Availble to donate"){
          schedulePushNotification('Blood Donation',`${res.data.data.name} is Availble to donate`,'data')
      }
    })
    .catch((err) => {
      console.log("err", err);
    });    
}
