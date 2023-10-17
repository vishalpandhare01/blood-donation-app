import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
  ScrollView,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Colors } from "../../styles/colors";
import { Ionicons } from "@expo/vector-icons";
import SearchFilter from "../ui/searchfilter";
import ButtonRounded from "../ui/button3";
import { useCallback, useState } from "react";
import DonarCard from "../ui/donarcard/donarcard";
import { useDispatch, useSelector } from "react-redux";
import { useReducer } from "react";
import { useLayoutEffect } from "react";
import { getAlluserapi } from "../../redux/action/actionapi";
import * as SecureStore from "expo-secure-store";
import RloadScreen from "../ui/rload";

const data= [
  {
      "id": "bce3e9ca-bef8-4453-8a10-0892a5d6cb",
      "name": "visal pandhare",
      "email": "vishalp5544@gmail.com",
      "phone": "8600244220",
      "password": "$2b$10$KCm.Y8iqSpR3pxDC.PfoWO5WH3tJGiHFd1ULj20tFqgc6fmv3lKzK",
      "blood_type": "A+",
      "address": "pachora",
      "profile_pic": "https://www.shareicon.net/data/128x128/2017/02/15/878685_user_512x512.png",
      "otp": 0,
      "isVryfiedOtp": false,
      "available": false,
      "diviceToken": "",
      "donations": [],
      "donated": [],
      "request_sent": [],
      "request_get": []
  },
  {
      "id": "e03a83fe-4714-473a-b493-210bcfa9a1",
      "name": "Bisal@123",
      "email": "Vishalp5544@gmail.com",
      "phone": "8600244226",
      "password": "$2b$10$RudRDfzqDUq09bszL2O/uuMed5A/h5xmrWPYwcPtkzrS3VIO6CByy",
      "blood_type": "B+",
      "address": "Nanded",
      "profile_pic": "https://www.shareicon.net/data/128x128/2017/02/15/878685_user_512x512.png",
      "otp": 0,
      "isVryfiedOtp": false,
      "available": false,
      "diviceToken": "",
      "donations": [],
      "donated": [],
      "request_sent": [],
      "request_get": []
  },
  {
      "id": "cbf17bc5-78bc-4a23-921b-54a89ed284",
      "name": "bisal pandhare",
      "email": "vishalpandhare2016@gmail.com",
      "phone": "8600244228",
      "password": "$2b$10$YkU.fwpteBPKY2jd0doNf.3MEaCPl88ft9lYMnqD.52oIcEPoG/nC",
      "blood_type": "A+",
      "address": "pachora",
      "profile_pic": "https://www.shareicon.net/data/128x128/2017/02/15/878685_user_512x512.png",
      "otp": 0,
      "isVryfiedOtp": false,
      "available": false,
      "diviceToken": "",
      "donations": [],
      "donated": [],
      "request_sent": [],
      "request_get": []
  },
  {
    "id": "bce3e9ca-bef8-4453-8a10-089208ad6cb",
    "name": "visal pandhare",
    "email": "vishalp5544@gmail.com",
    "phone": "8600244220",
    "password": "$2b$10$KCm.Y8iqSpR3pxDC.PfoWO5WH3tJGiHFd1ULj20tFqgc6fmv3lKzK",
    "blood_type": "A+",
    "address": "pachora",
    "profile_pic": "https://www.shareicon.net/data/128x128/2017/02/15/878685_user_512x512.png",
    "otp": 0,
    "isVryfiedOtp": false,
    "available": false,
    "diviceToken": "",
    "donations": [],
    "donated": [],
    "request_sent": [],
    "request_get": []
},
{
  "id": "bce3e9ca-bef8-4453-8a10-083208a56cb",
  "name": "visal pandhare",
  "email": "vishalp5544@gmail.com",
  "phone": "8600244220",
  "password": "$2b$10$KCm.Y8iqSpR3pxDC.PfoWO5WH3tJGiHFd1ULj20tFqgc6fmv3lKzK",
  "blood_type": "A+",
  "address": "pachora",
  "profile_pic": "https://www.shareicon.net/data/128x128/2017/02/15/878685_user_512x512.png",
  "otp": 0,
  "isVryfiedOtp": false,
  "available": false,
  "diviceToken": "",
  "donations": [],
  "donated": [],
  "request_sent": [],
  "request_get": []
},
{
  "id": "bce3e9ca-bef8-4453-8a10-0208a5d6cb",
  "name": "visal pandhare",
  "email": "vishalp5544@gmail.com",
  "phone": "8600244220",
  "password": "$2b$10$KCm.Y8iqSpR3pxDC.PfoWO5WH3tJGiHFd1ULj20tFqgc6fmv3lKzK",
  "blood_type": "A+",
  "address": "pachora",
  "profile_pic": "https://www.shareicon.net/data/128x128/2017/02/15/878685_user_512x512.png",
  "otp": 0,
  "isVryfiedOtp": false,
  "available": false,
  "diviceToken": "",
  "donations": [],
  "donated": [],
  "request_sent": [],
  "request_get": []
},
{
  "id": "bce3e9ca-bef8-4453-8a10-0808a5d6cb",
  "name": "visal pandhare",
  "email": "vishalp5544@gmail.com",
  "phone": "8600244220",
  "password": "$2b$10$KCm.Y8iqSpR3pxDC.PfoWO5WH3tJGiHFd1ULj20tFqgc6fmv3lKzK",
  "blood_type": "A+",
  "address": "pachora",
  "profile_pic": "https://www.shareicon.net/data/128x128/2017/02/15/878685_user_512x512.png",
  "otp": 0,
  "isVryfiedOtp": false,
  "available": false,
  "diviceToken": "",
  "donations": [],
  "donated": [],
  "request_sent": [],
  "request_get": []
},
  
]

export default function SearchComponent() {
  const [filter, setFiletr] = useState(false);
  const [alluserdata, setAlluserdata] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const dispatch = useDispatch();
  const { alluserData } = useSelector((state) => state.reducer);

  useLayoutEffect(() => {
    // getAlluserData();
    // onRefresh();
    // console.log("check");
  }, []);
  // console.log("alluserdata", alluserdata);

  
  async function getAlluserData() {
    const token = await SecureStore.getItemAsync("secure_token");
    dispatch(getAlluserapi({ token }));
    setAlluserdata(alluserData.data.data);
  }

  function FilterOrSearch() {
    if (filter) {
      return (
        <>
          <View style={styles.filterContainer}>
            <SearchFilter />
            <View style={styles.applyButton}>
              <View style={styles.buttonContainer}>
                <ButtonRounded>Apply</ButtonRounded>
              </View>
            </View>
          </View>
        </>
      );
    }
  }

  return (
    <>
    <SafeAreaView >
      <View>
        <View style={styles.SearchBoxcontainer}>
          <TextInput style={styles.searchbox} placeholder="Search" />
          <Pressable
            style={styles.filter}
            onPress={() => (filter ? setFiletr(false) : setFiletr(true))}
          >
            <Ionicons
              name="filter"
              style={{ marginLeft: 8 }}
              color="#ffffff"
              size={35}
            />
          </Pressable>
        </View>
        <FilterOrSearch />
        {/* {refreshing ? <RloadScreen/> : null} */}
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <DonarCard key={item.id} data={item} />}
        />
      </View>
    </SafeAreaView >
    </>

  );
}

const styles = StyleSheet.create({
  container: {},
  SearchBoxcontainer: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 12,
  },
  searchbox: {
    width: 290,
    height: 48,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    marginRight: 3,
  },
  filter: {
    width: 48,
    height: 48,
    backgroundColor: Colors.red500,
  },
  filterContainer: {
    margin: 10,
  },
  applyButton: {
    backgroundColor: "#ffffff",
    borderColor: Colors.red300,
    padding: 10,
    paddingTop: 100,
    margin: 2,
  },
  buttonContainer: {
    alignItems: "center",
    padding: 16,
  },
});
