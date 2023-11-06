import { StyleSheet } from "react-native"
import { color } from "../../utils/colors"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16
    },
    pageName: {
        marginTop: 80,
        marginBottom: 20,
        fontSize: 35,
        fontWeight: 700,
    },
    userName: {
        fontSize: 24,
        fontWeight: 700,
        color: color.BLACK
    },
    userEmail: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: 600
    },
    rowWrapper: {
        borderTopWidth: 1,
        borderColor: '#e3e3e3',
    },
    row: {
        height: 70,
        justifyContent: 'center',
    },
    rowTitle: {
        fontSize: 20,
        fontWeight: 700,
        color: color.BLACK
    },
    rowCaption: {
        fontSize: 12,
        lineHeight: 12,
        fontWeight: 600
    },
    rowSpacer: {
        flex: 1
    }
})