import { View, Text, ViewProps } from 'react-native';

import { styles } from './styles';

interface Props extends ViewProps {
    tittle: string;
    subtittle: string;
}

export function Heading({tittle, subtittle, ...rest}: Props) {
  return (
    <View style={styles.container} {...rest}>
        <Text style={styles.tittle}>
            {tittle}
        </Text>

        <Text style={styles.subtittle}>
            {subtittle}
        </Text>

    </View>
  );
}