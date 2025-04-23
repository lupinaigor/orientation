import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    useWindowDimensions
} from 'react-native';


export default function App() {
    const { width, height } = useWindowDimensions();
    const isPortrait = height >= width;

    const backgroundColor = isPortrait ? '#ffffff' : '#d3d3d3'; // білий або світло-сірий

    return (
        <SafeAreaView style={[styles.container, { backgroundColor }]}>
            <Text>
                {isPortrait
                    ? 'Ви використовуєте портретну орієнтацію'
                    : 'Ви використовуєте ландшафтну орієнтацію'}
            </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
