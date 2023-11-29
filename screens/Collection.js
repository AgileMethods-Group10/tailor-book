import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Collection = () => {
  return (
    <View style={styles.collection}>
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textFlexBox]}>9:41</Text>
        <Image
          style={[styles.rightSideIcon, styles.iconPosition3]}
          contentFit="cover"
          source={require("../assets/right-side.png")}
        />
      </View>
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textFlexBox]}>9:41</Text>
        <Image
          style={[styles.rightSideIcon, styles.iconPosition3]}
          contentFit="cover"
          source={require("../assets/right-side.png")}
        />
      </View>
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textFlexBox]}>9:41</Text>
        <Image
          style={[styles.rightSideIcon, styles.iconPosition3]}
          contentFit="cover"
          source={require("../assets/right-side.png")}
        />
      </View>
      <View style={styles.frameParent}>
        <View style={styles.rectangleParent}>
          <View style={styles.frameChild} />
          <View style={[styles.frameItem, styles.frameLayout]} />
          <View style={[styles.frameInner, styles.frameLayout]} />
        </View>
        <Text style={[styles.tailorbook, styles.textFlexBox]}>
          <Text style={styles.textTypo}>Tailor</Text>
          <Text style={styles.book}>Book.</Text>
        </Text>
        <Image
          style={[styles.materialSymbolssearchIcon, styles.iconLayout3]}
          contentFit="cover"
          source={require("../assets/materialsymbolssearch.png")}
        />
        <Image
          style={[styles.materialSymbolssearchIcon, styles.iconLayout3]}
          contentFit="cover"
          source={require("../assets/materialsymbolsnotificationsactive.png")}
        />
      </View>
      <View style={[styles.collectionChild, styles.collectionChildLayout1]} />
      <View style={[styles.collectionItem, styles.collectionChildLayout1]} />
      <View style={[styles.collectionInner, styles.collectionChildLayout1]} />
      <View style={[styles.rectangleView, styles.collectionChildLayout1]} />
      <View style={[styles.collectionChild1, styles.collectionChildLayout1]} />
      <View style={[styles.collectionChild2, styles.collectionChildLayout1]} />
      <View style={[styles.collectionChild3, styles.collectionChildLayout1]} />
      <View style={[styles.collectionChild4, styles.collectionChildLayout1]} />
      <View style={[styles.collectionChild5, styles.collectionChildLayout1]} />
      <Text style={[styles.kurta, styles.kurtaTypo]}>Kurta</Text>
      <Text style={[styles.blouse, styles.kurtaTypo]}>Blouse</Text>
      <Text style={[styles.saree, styles.sareeTypo]}>Saree</Text>
      <Text style={[styles.nightGown, styles.kurtaTypo]}>Night Gown</Text>
      <Text style={[styles.churidar, styles.kurtaTypo]}>Churidar</Text>
      <Text style={[styles.jeans, styles.kurtaTypo]}>Jeans</Text>
      <Text style={[styles.pants, styles.kurtaTypo]}>Pants</Text>
      <Text style={[styles.pajama, styles.pajamaTypo]}>Pajama</Text>
      <Text style={[styles.addNewFolder, styles.kurtaTypo]}>
        Add New Folder
      </Text>
      <View
        style={[styles.collectionChild6, styles.collectionChildPosition1]}
      />
      <View
        style={[styles.collectionChild7, styles.collectionChildPosition1]}
      />
      <View
        style={[styles.collectionChild8, styles.collectionChildPosition1]}
      />
      <View style={[styles.collectionChild9, styles.collectionChildLayout1]} />
      <View
        style={[styles.collectionChild10, styles.collectionChildPosition1]}
      />
      <View
        style={[styles.collectionChild11, styles.collectionChildPosition1]}
      />
      <View
        style={[styles.collectionChild12, styles.collectionChildPosition1]}
      />
      <View
        style={[styles.collectionChild13, styles.collectionChildPosition1]}
      />
      <Text style={[styles.salwar, styles.coatTypo]}>Salwar</Text>
      <Text style={[styles.burka, styles.coatTypo]}>Burka</Text>
      <Text style={[styles.underSkirt, styles.sareeTypo]}>Under Skirt</Text>
      <Text style={[styles.frock, styles.coatTypo]}>Frock</Text>
      <Text style={[styles.shorts, styles.coatTypo]}>Shorts</Text>
      <Text style={[styles.shirt, styles.coatTypo]}>Shirt</Text>
      <Text style={[styles.coat, styles.coatTypo]}>Coat</Text>
      <Text style={[styles.salwarKameez, styles.pajamaTypo]}>
        Salwar Kameez
      </Text>
      <View style={[styles.collectionChild14, styles.collectionChildLayout]} />
      <View style={[styles.collectionChild15, styles.collectionChildLayout]} />
      <View style={[styles.collectionChild16, styles.collectionChildLayout]} />
      <View style={[styles.collectionChild17, styles.collectionChildLayout]} />
      <View style={[styles.collectionChild18, styles.collectionChildLayout]} />
      <View style={[styles.collectionChild19, styles.collectionChildLayout]} />
      <View style={[styles.collectionChild20, styles.collectionChildLayout]} />
      <View style={[styles.collectionChild21, styles.collectionChildLayout]} />
      <View style={[styles.collectionChild22, styles.collectionChildLayout]} />
      <View
        style={[styles.collectionChild23, styles.collectionChildPosition]}
      />
      <View
        style={[styles.collectionChild24, styles.collectionChildPosition]}
      />
      <View
        style={[styles.collectionChild25, styles.collectionChildPosition]}
      />
      <View
        style={[styles.collectionChild26, styles.collectionChildPosition]}
      />
      <View
        style={[styles.collectionChild27, styles.collectionChildPosition]}
      />
      <View
        style={[styles.collectionChild28, styles.collectionChildPosition]}
      />
      <View
        style={[styles.collectionChild29, styles.collectionChildPosition]}
      />
      <View
        style={[styles.collectionChild30, styles.collectionChildPosition]}
      />
      <Image
        style={[styles.image41Icon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/image-41.png")}
      />
      <Image
        style={styles.image42Icon}
        contentFit="cover"
        source={require("../assets/image-42.png")}
      />
      <Image
        style={[styles.image43Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image-43.png")}
      />
      <Image
        style={[styles.image44Icon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/image-44.png")}
      />
      <Image
        style={[styles.image45Icon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/image-45.png")}
      />
      <Image
        style={styles.image46Icon}
        contentFit="cover"
        source={require("../assets/image-46.png")}
      />
      <Image
        style={[styles.image47Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image-47.png")}
      />
      <Image
        style={styles.image48Icon}
        contentFit="cover"
        source={require("../assets/image-48.png")}
      />
      <Image
        style={[styles.image49Icon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/image-49.png")}
      />
      <Image
        style={[styles.image50Icon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/image-50.png")}
      />
      <Image
        style={[styles.image51Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-51.png")}
      />
      <Image
        style={[styles.image53Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-53.png")}
      />
      <Image
        style={[styles.image54Icon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/image-54.png")}
      />
      <Image
        style={[styles.image55Icon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/image-55.png")}
      />
      <Image
        style={styles.fa6SolidfolderPlusIcon}
        contentFit="cover"
        source={require("../assets/fa6solidfolderplus.png")}
      />
      <Image
        style={[styles.phcameraBoldIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/phcamerabold1.png")}
      />
      <Image
        style={[styles.rifileList3LineIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/rifilelist3line1.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.iconPosition3]}
        contentFit="cover"
        source={require("../assets/ellipse-601.png")}
      />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Text style={[styles.orders, styles.ordersTypo]}>Orders</Text>
      <Text style={[styles.gallery, styles.ordersTypo]}>Gallery</Text>
      <Image
        style={styles.image40Icon}
        contentFit="cover"
        source={require("../assets/image-40.png")}
      />
      <Image
        style={[styles.openmojireturnIcon, styles.iconLayout3]}
        contentFit="cover"
        source={require("../assets/openmojireturn.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  iconPosition3: {
    left: "50%",
    position: "absolute",
  },
  frameLayout: {
    marginTop: 6,
    height: 4,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_8xs,
  },
  iconLayout3: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  collectionChildLayout1: {
    height: 175,
    width: 166,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  kurtaTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  sareeTypo: {
    top: 676,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  pajamaTypo: {
    top: 1666,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  collectionChildPosition1: {
    left: 230,
    height: 175,
    width: 166,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  coatTypo: {
    left: 286,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  collectionChildLayout: {
    height: 120,
    width: 135,
    backgroundColor: Color.colorGhostwhite,
    left: 51,
    position: "absolute",
  },
  collectionChildPosition: {
    left: 246,
    height: 120,
    width: 135,
    backgroundColor: Color.colorGhostwhite,
    position: "absolute",
  },
  iconLayout2: {
    width: 80,
    position: "absolute",
  },
  iconLayout1: {
    height: 109,
    position: "absolute",
  },
  iconPosition1: {
    left: 272,
    width: 80,
    position: "absolute",
  },
  iconPosition: {
    top: 1353,
    width: 80,
    position: "absolute",
  },
  iconLayout: {
    height: 30,
    position: "absolute",
    overflow: "hidden",
  },
  ordersTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    top: 2031,
    textAlign: "left",
    position: "absolute",
  },
  text: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
    left: 15,
    top: 4,
    position: "absolute",
  },
  rightSideIcon: {
    marginLeft: 108,
    width: 77,
    height: 13,
    top: 4,
    left: "50%",
  },
  parent: {
    top: 0,
    left: 0,
    width: 430,
    height: 34,
    position: "absolute",
    overflow: "hidden",
  },
  frameChild: {
    height: 4,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_8xs,
    width: 25,
  },
  frameItem: {
    width: 34,
  },
  frameInner: {
    width: 25,
    marginTop: 6,
  },
  rectangleParent: {
    height: 26,
  },
  textTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  book: {
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
  },
  tailorbook: {
    fontSize: FontSize.size_5xl,
    marginLeft: 58,
  },
  materialSymbolssearchIcon: {
    marginLeft: 58,
  },
  frameParent: {
    top: 57,
    flexDirection: "row",
    left: 15,
    position: "absolute",
  },
  collectionChild: {
    left: 35,
    width: 166,
    backgroundColor: Color.colorWhite,
    top: 136,
  },
  collectionItem: {
    top: 334,
    left: 35,
    width: 166,
    backgroundColor: Color.colorWhite,
  },
  collectionInner: {
    top: 532,
    left: 35,
    width: 166,
    backgroundColor: Color.colorWhite,
  },
  rectangleView: {
    top: 730,
    left: 35,
    width: 166,
    backgroundColor: Color.colorWhite,
  },
  collectionChild1: {
    top: 928,
    left: 35,
    width: 166,
    backgroundColor: Color.colorWhite,
  },
  collectionChild2: {
    top: 1126,
    left: 35,
    width: 166,
    backgroundColor: Color.colorWhite,
  },
  collectionChild3: {
    top: 1324,
    left: 35,
    width: 166,
    backgroundColor: Color.colorWhite,
  },
  collectionChild4: {
    top: 1522,
    left: 35,
    width: 166,
    backgroundColor: Color.colorWhite,
  },
  collectionChild5: {
    top: 1720,
    left: 35,
    width: 166,
    backgroundColor: Color.colorWhite,
  },
  kurta: {
    left: 86,
    top: 280,
  },
  blouse: {
    top: 478,
    left: 86,
  },
  saree: {
    left: 86,
  },
  nightGown: {
    left: 72,
    top: 874,
  },
  churidar: {
    left: 73,
    top: 1072,
  },
  jeans: {
    top: 1270,
    left: 86,
  },
  pants: {
    top: 1468,
    left: 86,
  },
  pajama: {
    left: 86,
  },
  addNewFolder: {
    top: 1864,
    left: 57,
  },
  collectionChild6: {
    top: 136,
  },
  collectionChild7: {
    top: 334,
  },
  collectionChild8: {
    top: 532,
  },
  collectionChild9: {
    left: 109,
    top: 148,
  },
  collectionChild10: {
    top: 928,
  },
  collectionChild11: {
    top: 1126,
  },
  collectionChild12: {
    top: 1324,
  },
  collectionChild13: {
    top: 1522,
  },
  salwar: {
    top: 280,
  },
  burka: {
    top: 478,
  },
  underSkirt: {
    left: 268,
  },
  frock: {
    top: 874,
  },
  shorts: {
    top: 1072,
  },
  shirt: {
    top: 1270,
  },
  coat: {
    top: 1468,
  },
  salwarKameez: {
    left: 249,
  },
  collectionChild14: {
    top: 148,
  },
  collectionChild15: {
    top: 346,
  },
  collectionChild16: {
    top: 544,
  },
  collectionChild17: {
    top: 742,
  },
  collectionChild18: {
    top: 940,
  },
  collectionChild19: {
    top: 1138,
  },
  collectionChild20: {
    top: 1336,
  },
  collectionChild21: {
    top: 1534,
  },
  collectionChild22: {
    top: 1732,
  },
  collectionChild23: {
    top: 148,
  },
  collectionChild24: {
    top: 346,
  },
  collectionChild25: {
    top: 544,
  },
  collectionChild26: {
    top: 742,
  },
  collectionChild27: {
    top: 940,
  },
  collectionChild28: {
    top: 1138,
  },
  collectionChild29: {
    top: 1336,
  },
  collectionChild30: {
    top: 1534,
  },
  image41Icon: {
    top: 366,
    height: 84,
    left: 78,
    width: 80,
  },
  image42Icon: {
    top: 356,
    left: 281,
    width: 65,
    height: 103,
    position: "absolute",
  },
  image43Icon: {
    top: 549,
    left: 88,
    width: 60,
  },
  image44Icon: {
    top: 564,
    height: 80,
  },
  image45Icon: {
    top: 749,
    height: 106,
    left: 78,
    width: 80,
  },
  image46Icon: {
    top: 754,
    left: 285,
    width: 55,
    height: 101,
    position: "absolute",
  },
  image47Icon: {
    top: 951,
    width: 114,
    left: 63,
  },
  image48Icon: {
    top: 977,
    left: 265,
    width: 97,
    height: 58,
    position: "absolute",
  },
  image49Icon: {
    top: 1155,
    height: 80,
    left: 78,
    width: 80,
  },
  image50Icon: {
    top: 1159,
    height: 79,
    left: 268,
  },
  image51Icon: {
    height: 80,
    left: 86,
  },
  image53Icon: {
    height: 85,
    left: 268,
  },
  image54Icon: {
    top: 1554,
    left: 80,
    height: 80,
  },
  image55Icon: {
    top: 1546,
    height: 95,
  },
  fa6SolidfolderPlusIcon: {
    top: 1762,
    height: 60,
    width: 60,
    left: 86,
    position: "absolute",
    overflow: "hidden",
  },
  phcameraBoldIcon: {
    top: 1999,
    left: 334,
    width: 35,
  },
  rifileList3LineIcon: {
    top: 2001,
    width: 30,
    left: 63,
  },
  ellipseIcon: {
    marginLeft: -48,
    top: 1942,
    width: 70,
    height: 70,
  },
  vectorIcon: {
    height: "1.16%",
    marginLeft: -25,
    top: "94.7%",
    bottom: "4.14%",
    maxHeight: "100%",
    width: 24,
    left: "50%",
    position: "absolute",
  },
  orders: {
    left: 59,
    color: Color.colorSilver,
  },
  gallery: {
    left: 331,
    color: Color.colorRoyalblue,
  },
  image40Icon: {
    top: 159,
    left: 92,
    width: 66,
    height: 98,
    position: "absolute",
  },
  openmojireturnIcon: {
    top: 23,
    left: 11,
    position: "absolute",
  },
  collection: {
    backgroundColor: "#faf8f8",
    flex: 1,
    width: "100%",
    height: 2075,
    overflow: "hidden",
  },
});

export default Collection;
