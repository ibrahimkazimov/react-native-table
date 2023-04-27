import * as React from 'react';
import { ScrollView } from 'react-native';
import {Table, Head, Body, Tr, Td} from "../../src/index"
import { StyleSheet, View, Text } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
       <ScrollView
          style={{display: 'flex', flexDirection: 'column'}}
          horizontal={false}>
          <ScrollView horizontal={true}>
            <Table widths={[150, 150]}>
              <Head style={{backgroundColor: '#F9FAFB'}}>
                <Tr>
                    <Td>
                      <Text>
                      </Text>
                    </Td>
                    <Td>
                      <Text>
                      </Text>
                    </Td>
                </Tr>
              </Head>
              <Body>
                  <Tr>
                    <Td>
                      <Text>
                      
                      </Text>
                    </Td>
                    <Td>
                      <Text>
             
                      </Text>
                    </Td>
                
                  </Tr>
              </Body>
            </Table>
          </ScrollView>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
