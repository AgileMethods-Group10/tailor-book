import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Active2 = () => {
  return (
    <View style={styles.active2}>
      <View style={[styles.frame, styles.framePosition]}>
        <View style={[styles.frameParent, styles.parentPosition]}>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChild} />
            <View style={[styles.frameItem, styles.frameLayout2]} />
            <View style={[styles.frameInner, styles.frameLayout2]} />
          </View>
          <Text style={[styles.tailorbook, styles.textFlexBox]}>
            <Text style={styles.textTypo}>Tailor</Text>
            <Text style={styles.book}>Book.</Text>
          </Text>
          <Image
            style={[styles.materialSymbolssearchIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/materialsymbolssearch.png")}
          />
          <Image
            style={[styles.materialSymbolssearchIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/materialsymbolsnotificationsactive.png")}
          />
        </View>
      </View>
      <View style={styles.frame1}>
        <View style={[styles.activeParent, styles.parentPosition]}>
          <Text style={[styles.active, styles.activeTypo]}>Active</Text>
          <Text style={[styles.completed, styles.activeTypo]}>Completed</Text>
        </View>
      </View>
      <View style={[styles.frame2, styles.frame2Layout]}>
        <View style={[styles.rectangleView, styles.frameChild19Layout]} />
      </View>
      <View style={[styles.frame3, styles.frame3Position]}>
        <View style={[styles.parent, styles.frame3Position]}>
          <Text style={[styles.text, styles.textTypo]}>9:41</Text>
          <Image
            style={[styles.rightSideIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/right-side.png")}
          />
        </View>
        <Image
          style={[styles.openmojireturnIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/openmojireturn.png")}
        />
      </View>
      <View style={[styles.frame4, styles.frameLayout1]}>
        <View style={[styles.frame5, styles.frameChildShadowBox]}>
          <View style={[styles.frameChild1, styles.frameChildShadowBox]} />
          <Image
            style={[styles.rectangleIcon, styles.zakirUllahPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-91.png")}
          />
          <View style={[styles.frameChild2, styles.iconLayout]} />
          <Text style={[styles.zakirUllah, styles.zakirUllahPosition]}>
            Zakir Ullah
          </Text>
          <Text style={styles.view}>View</Text>
          <Text style={[styles.salwarKameez1, styles.ghc6001Typo]}>
            Salwar Kameez #1
          </Text>
          <Image
            style={styles.ellipseIcon}
            contentFit="cover"
            source={require("../assets/ellipse-60.png")}
          />
          <Text style={[styles.received, styles.ghc6001Typo]}>Received</Text>
          <Text style={[styles.ghc6001, styles.ghc6001Typo]}>
            GHC 600 (1 Item)
          </Text>
          <Text style={[styles.dueOnMay, styles.ghc6001Typo]}>
            Due on May 20, 2023
          </Text>
        </View>
      </View>
      <View style={[styles.frame6, styles.frameLayout1]}>
        <View style={[styles.frame7, styles.frameChildShadowBox]}>
          <View style={[styles.frameChild3, styles.frameChildShadowBox]} />
          <Image
            style={[styles.rectangleIcon, styles.zakirUllahPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-91.png")}
          />
          <View style={[styles.frameChild2, styles.iconLayout]} />
          <Text style={[styles.zakirUllah, styles.zakirUllahPosition]}>
            Zakir Ullah
          </Text>
          <Text style={styles.view}>View</Text>
          <Text style={[styles.salwarKameez1, styles.ghc6001Typo]}>
            Salwar Kameez #1
          </Text>
          <Image
            style={styles.ellipseIcon}
            contentFit="cover"
            source={require("../assets/ellipse-60.png")}
          />
          <Text style={[styles.received, styles.ghc6001Typo]}>Received</Text>
          <Text style={[styles.ghc6001, styles.ghc6001Typo]}>
            GHC 600 (1 Item)
          </Text>
          <Text style={[styles.dueOnMay, styles.ghc6001Typo]}>
            Due on May 20, 2023
          </Text>
        </View>
      </View>
      <View style={[styles.frame8, styles.frameLayout1]}>
        <View style={[styles.frame9, styles.frameChildShadowBox]}>
          <View style={[styles.frameChild7, styles.frameChildShadowBox]} />
          <Image
            style={[styles.rectangleIcon, styles.zakirUllahPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-91.png")}
          />
          <View style={[styles.frameChild2, styles.iconLayout]} />
          <Text style={[styles.zakirUllah, styles.zakirUllahPosition]}>
            Zakir Ullah
          </Text>
          <Text style={styles.view}>View</Text>
          <Text style={[styles.salwarKameez1, styles.ghc6001Typo]}>
            Salwar Kameez #1
          </Text>
          <Image
            style={styles.ellipseIcon}
            contentFit="cover"
            source={require("../assets/ellipse-60.png")}
          />
          <Text style={[styles.received, styles.ghc6001Typo]}>Received</Text>
          <Text style={[styles.ghc6001, styles.ghc6001Typo]}>
            GHC 600 (1 Item)
          </Text>
          <Text style={[styles.dueOnMay, styles.ghc6001Typo]}>
            Due on May 20, 2023
          </Text>
        </View>
      </View>
      <View style={[styles.frame10, styles.frameLayout1]}>
        <View style={[styles.frame11, styles.frameChildShadowBox]}>
          <View style={[styles.frameChild11, styles.frameChildShadowBox]} />
          <Image
            style={[styles.rectangleIcon, styles.zakirUllahPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-91.png")}
          />
          <View style={[styles.frameChild2, styles.iconLayout]} />
          <Text style={[styles.zakirUllah, styles.zakirUllahPosition]}>
            Zakir Ullah
          </Text>
          <Text style={styles.view}>View</Text>
          <Text style={[styles.salwarKameez1, styles.ghc6001Typo]}>
            Salwar Kameez #1
          </Text>
          <Image
            style={styles.ellipseIcon}
            contentFit="cover"
            source={require("../assets/ellipse-60.png")}
          />
          <Text style={[styles.received, styles.ghc6001Typo]}>Received</Text>
          <Text style={[styles.ghc6001, styles.ghc6001Typo]}>
            GHC 600 (1 Item)
          </Text>
          <Text style={[styles.dueOnMay, styles.ghc6001Typo]}>
            Due on May 20, 2023
          </Text>
        </View>
      </View>
      <View style={[styles.frame12, styles.frameLayout1]}>
        <View style={[styles.frame13, styles.frameChildShadowBox]}>
          <View style={[styles.frameChild15, styles.frameChildShadowBox]} />
          <Image
            style={[styles.rectangleIcon, styles.zakirUllahPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-91.png")}
          />
          <View style={[styles.frameChild2, styles.iconLayout]} />
          <Text style={[styles.zakirUllah, styles.zakirUllahPosition]}>
            Zakir Ullah
          </Text>
          <Text style={styles.view}>View</Text>
          <Text style={[styles.salwarKameez1, styles.ghc6001Typo]}>
            Salwar Kameez #1
          </Text>
          <Image
            style={styles.ellipseIcon}
            contentFit="cover"
            source={require("../assets/ellipse-60.png")}
          />
          <Text style={[styles.received, styles.ghc6001Typo]}>Received</Text>
          <Text style={[styles.ghc6001, styles.ghc6001Typo]}>
            GHC 600 (1 Item)
          </Text>
          <Text style={[styles.dueOnMay, styles.ghc6001Typo]}>
            Due on May 20, 2023
          </Text>
        </View>
      </View>
      <View style={[styles.frame14, styles.frameLayout]}>
        <View style={[styles.frame15, styles.frameLayout]}>
          <Image
            style={[styles.phcameraBoldIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/phcamerabold.png")}
          />
          <Image
            style={[styles.rifileList3LineIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/rifilelist3line.png")}
          />
          <Image
            style={[styles.frameChild19, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-601.png")}
          />
          <Image
            style={[styles.vectorIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <Text style={[styles.orders, styles.ordersTypo]}>Orders</Text>
          <Text style={[styles.gallery, styles.ordersTypo]}>Gallery</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    top: 57,
    overflow: "hidden",
  },
  parentPosition: {
    flexDirection: "row",
    top: 0,
    position: "absolute",
  },
  frameLayout2: {
    marginTop: 6,
    height: 4,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_8xs,
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  iconLayout1: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  activeTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  frame2Layout: {
    height: 3,
    position: "absolute",
  },
  frameChild19Layout: {
    width: 70,
    top: 0,
  },
  frame3Position: {
    width: 430,
    top: 0,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  iconPosition: {
    left: "50%",
    position: "absolute",
  },
  frameLayout1: {
    height: 89,
    width: 396,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frameChildShadowBox: {
    width: 364,
    shadowOpacity: 1,
    elevation: 51,
    shadowRadius: 51,
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 89,
    borderRadius: Border.br_8xs,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  zakirUllahPosition: {
    top: 9,
    position: "absolute",
  },
  iconLayout: {
    height: 30,
    position: "absolute",
  },
  ghc6001Typo: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  frameLayout: {
    height: 104,
    position: "absolute",
    overflow: "hidden",
  },
  ordersTypo: {
    top: 89,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  frameChild: {
    height: 4,
    backgroundColor: Color.colorBlack,
    width: 25,
    borderRadius: Border.br_8xs,
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
    left: 15,
  },
  frame: {
    width: 400,
    height: 29,
    left: 0,
    position: "absolute",
  },
  active: {
    color: Color.colorRoyalblue,
  },
  completed: {
    color: "#727272",
    marginLeft: 40,
  },
  activeParent: {
    left: 32,
  },
  frame1: {
    top: 121,
    width: 189,
    height: 17,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleView: {
    left: 18,
    backgroundColor: Color.colorRoyalblue,
    height: 3,
    position: "absolute",
  },
  frame2: {
    top: 145,
    width: 88,
    left: 0,
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.size_base,
    top: 4,
    textAlign: "left",
    color: Color.colorBlack,
    left: 15,
    position: "absolute",
  },
  rightSideIcon: {
    marginLeft: 108,
    width: 77,
    height: 13,
    top: 4,
  },
  parent: {
    height: 34,
  },
  openmojireturnIcon: {
    top: 23,
    left: 11,
    position: "absolute",
  },
  frame3: {
    height: 47,
  },
  frameChild1: {
    left: 0,
  },
  rectangleIcon: {
    left: 16,
    width: 69,
    height: 69,
    top: 9,
    borderRadius: Border.br_8xs,
  },
  frameChild2: {
    left: 279,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorAliceblue,
    width: 65,
    top: 29,
  },
  zakirUllah: {
    left: 104,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    top: 9,
  },
  view: {
    top: 37,
    left: 297,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    color: Color.colorRoyalblue,
    textAlign: "left",
    position: "absolute",
  },
  salwarKameez1: {
    left: 104,
    top: 29,
  },
  ellipseIcon: {
    top: 45,
    width: 8,
    height: 8,
    left: 104,
    position: "absolute",
  },
  received: {
    top: 42,
    left: 121,
  },
  ghc6001: {
    bottom: 22,
    left: 104,
  },
  dueOnMay: {
    top: 66,
    left: 104,
  },
  frame5: {
    left: 32,
    overflow: "hidden",
  },
  frame4: {
    top: 190,
  },
  frameChild3: {
    left: 0,
  },
  frame7: {
    left: 32,
    overflow: "hidden",
  },
  frame6: {
    top: 291,
  },
  frameChild7: {
    left: 0,
  },
  frame9: {
    left: 32,
    overflow: "hidden",
  },
  frame8: {
    top: 392,
  },
  frameChild11: {
    left: 0,
  },
  frame11: {
    left: 32,
    overflow: "hidden",
  },
  frame10: {
    top: 493,
  },
  frameChild15: {
    left: 0,
  },
  frame13: {
    left: 32,
    overflow: "hidden",
  },
  frame12: {
    top: 594,
  },
  phcameraBoldIcon: {
    left: 275,
    width: 35,
    top: 57,
    overflow: "hidden",
  },
  rifileList3LineIcon: {
    top: 59,
    left: 4,
    width: 30,
    overflow: "hidden",
  },
  frameChild19: {
    marginLeft: -48,
    height: 70,
    width: 70,
    top: 0,
  },
  vectorIcon: {
    height: "23.08%",
    marginLeft: -25,
    top: "22.12%",
    bottom: "54.81%",
    maxHeight: "100%",
    width: 24,
    left: "50%",
  },
  orders: {
    color: Color.colorRoyalblue,
    left: 0,
  },
  gallery: {
    left: 272,
    color: Color.colorSilver,
  },
  frame15: {
    left: 64,
    width: 312,
    top: 0,
    height: 104,
  },
  frame14: {
    top: 786,
    width: 376,
    left: 0,
  },
  active2: {
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Active2;
