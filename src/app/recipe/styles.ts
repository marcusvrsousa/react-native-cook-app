import { StyleSheet } from "react-native"
import { theme } from "@/theme"

export const styles = StyleSheet.create({
  container: { 
    flex: 1,
  },
  image: {
    width: "100%",
    height: 192,
    backgroundColor: theme.colors.gray_300,
  },
  body: {
    borderTopStartRadius: theme.borderRadius.lg,
    borderTopEndRadius: theme.borderRadius.lg,
    backgroundColor: theme.colors.white,
    marginTop: 0,
  },
  header: {
    padding: 32,
  },
  ingredients:{
    width: '100%',
    alignItems: "center",
    flexDirection: "row",
    flexWrap: 'wrap',
    marginStart: 32,
    gap: 6
  },
  content: {
    padding: 32,
  },
  name: {
    fontSize: theme.fonts.size.heading.md,
    fontFamily: theme.fonts.family.bold,
    marginTop: 22,
  },
  preparation: {
    fontSize: theme.fonts.size.heading.sm,
    fontFamily: theme.fonts.family.medium,
    marginBottom: 6,
  },
  time: {
    fontSize: theme.fonts.size.body.sm,
    fontFamily: theme.fonts.family.regular,
    color: theme.colors.gray_400,
  },
})
