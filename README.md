React native package for creating tables.

## Installation

```sh
npm install simple-react-native-tables
```

## Usage

```js
import { Table, Tr, Td, Head, Body } from 'simple-react-native-tables';

<ScrollView
    style={{display: 'flex', flexDirection: 'column'}}
    horizontal={false}>
    <ScrollView horizontal={true}>
        <Table widths={[150, 150, 150]}>
            <Head style={{backgroundColor: '#F9FAFB'}}>
                <Tr>
                    <Td style={{paddingHorizontal: 24, paddingVertical: 12}}>
                        <Text style={{fontSize: 12, fontWeight: 700, textTransform: 'uppercase', color: "#374151"}} >
                        First Name
                        </Text>
                    </Td>
                    <Td style={{paddingHorizontal: 24, paddingVertical: 12}}>
                        <Text style={{fontSize: 12, fontWeight: 700, textTransform: 'uppercase', color: "#374151"}}>
                        Last Name
                        </Text>
                    </Td>
                    <Td style={{paddingHorizontal: 24, paddingVertical: 12}}>
                        <Text style={{fontSize: 12, fontWeight: 700, textTransform: 'uppercase', color: "#374151"}}>
                        Phone Number
                        </Text>
                    </Td>
                    
                </Tr>
            </Head>
            <Body>
                <Tr style={{borderBottomColor: '#d1d5db', borderBottomWidth: 1}}>
                    <Td style={{paddingHorizontal: 24, paddingVertical: 16}}>
                        <Text style={{fontSize: 14}}>
                            Ibrahim
                        </Text>
                    </Td>
                    <Td style={{paddingHorizontal: 24, paddingVertical: 16}}>
                        <Text style={{fontSize: 14}}>
                            Kazımov
                        </Text>
                    </Td>
                     <Td style={{paddingHorizontal: 24, paddingVertical: 16}}>
                        <Text style={{fontSize: 14}}>
                        +9999999999
                        </Text>
                    </Td>
            
                </Tr>
                <Tr style={{borderBottomColor: '#d1d5db', borderBottomWidth: 1}}>
                    <Td style={{paddingHorizontal: 24, paddingVertical: 16}}>
                        <Text style={{fontSize: 14}}>
                            John
                        </Text>
                    </Td>
                    <Td style={{paddingHorizontal: 24, paddingVertical: 16}}>
                        <Text style={{fontSize: 14}}>
                            Cena
                        </Text>
                    </Td>
                     <Td style={{paddingHorizontal: 24, paddingVertical: 16}}>
                        <Text style={{fontSize: 14}}>
                        +123231123
                        </Text>
                    </Td>
            
                </Tr>
            
            </Body>
        </Table>
    </ScrollView>
</ScrollView>

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT


