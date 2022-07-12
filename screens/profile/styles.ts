
import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingBottom: 20,
  },
  profileContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginVertical: 45
  },
  profilePictureWrapper: {
    backgroundColor: Colors.secondaryBackground,
    padding: 15,
    alignSelf: 'center',
    borderRadius: 50,
  },
  profilePicture: {
    width: 75,
    height: 75,
    borderRadius: 50
  },
  username: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  phonenumber: {
    color: '#B5B5B5',
    fontSize: 12,
  },
  menuContainer: {
    backgroundColor: Colors.secondaryBackground,
    width: '90%',
    borderRadius: 8,
    alignSelf: 'center',
    paddingHorizontal: 12,
    paddingTop: 12
  },
  menuHeader: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 12
  },
  menuTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  }
});
