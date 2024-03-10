import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        gap: 12,
        marginStart: 16
    },
    header: {
        paddingHorizontal: 24,
        paddingTop: 48,
        marginBottom: 2
    },
    title: {
        fontSize: theme.fonts.size.heading.md,
        fontFamily: theme.fonts.family.bold,
        marginTop: 20,
        textAlign: 'center'
        // marginStart: 8
    },
    recipes: {
        padding: 16,
        
    },
    recipesContent: {
        gap: 16
    }
})