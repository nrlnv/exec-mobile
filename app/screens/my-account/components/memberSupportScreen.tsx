import { useMutation } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SUPPORT } from '../../../../assets/images';
import { Button, Screen, Text } from '../../../components';
import { REQUEST_SUPPORT } from '../../../services/api/mutations';
import { color } from '../../../theme';
import { perfectSize } from '../../../utils/dimmesion';
import { AccountHeader } from './accountHeader';
import { AccountInput } from './accountInput';

export const MemberSupportScreen = () => {
    const navigation = useNavigation()
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const [requestSupport] = useMutation(REQUEST_SUPPORT, {
        onCompleted: () => {
          navigation.goBack()
        },
      })

    const onSendPress = () => {
        requestSupport({
            variables: {
                requestSupportInput2: {
                    subject,
                    message
                }
            }
        })
    }

    return (
        <Screen style={styles.container} unsafe >
            <AccountHeader title={'Support'} icon={SUPPORT} />
            <View style={styles.mainView}>
                <Text 
                    style={styles.text}
                    text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis viverra consequat. Nam quis nunc est. Nullam dictum quis velit id tincidunt.'} />
                <AccountInput title={'Subject'} value={subject} onChangeText={setSubject} />
                <AccountInput title={'Message'} value={message} onChangeText={setMessage} multiline={true} />
            </View>
            <Button text={'send message'} style={styles.button} onPress={onSendPress} />

        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.palette.black
    },
    mainView: {
        marginTop: perfectSize(32),
        paddingHorizontal: perfectSize(24),
        flex: 1,
    },
    button: {
        marginBottom: perfectSize(30),
        marginHorizontal: perfectSize(24)
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: perfectSize(20)
    }
})