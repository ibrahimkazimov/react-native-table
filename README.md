# react-native-table

React native package for creating tables.

## Installation

```sh
npm install simple-react-native-tables
```

## Usage

```js
import { Table, Tr, Td, Head, Body } from 'react-native-table';

<ScrollView
    style={{display: 'flex', flexDirection: 'column'}}
    horizontal={false}>
    <ScrollView horizontal={true}>
        <Table widths={[150, 150, 150]}>
            <Head style={{backgroundColor: '#F9FAFB'}}>
                <Tr>
                    <Td className={'px-6 py-3'}>
                        <Text className="text-xs font-bold text-gray-700 uppercase bg-gray-50">
                        First Name
                        </Text>
                    </Td>
                    <Td className={'px-6 py-3'}>
                        <Text className="text-xs font-bold text-gray-700 uppercase bg-gray-50">
                        Last Name
                        </Text>
                    </Td>
                    <Td className={'px-6 py-3'}>
                        <Text className="text-xs font-bold text-gray-700 uppercase bg-gray-50">
                        Phone Number
                        </Text>
                    </Td>
                    
                </Tr>
            </Head>
            <Body>
                <Tr className={'bg-white border-b border-gray-300'}>
                    <Td className={'px-6 py-4'}>
                        <Text className="text-sm">
                            Ibrahim
                        </Text>
                    </Td>
                    <Td className={'px-6 py-4'}>
                        <Text className="text-sm">
                            Kazımov
                        </Text>
                    </Td>
                     <Td className={'px-6 py-4'}>
                        <Text className="text-sm">
                        +9999999999
                        </Text>
                    </Td>
            
                </Tr>
                <Tr className={'bg-white border-b border-gray-300'}>
                    <Td className={'px-6 py-4'}>
                        <Text className="text-sm">
                            John
                        </Text>
                    </Td>
                    <Td className={'px-6 py-4'}>
                        <Text className="text-sm">
                            Cena
                        </Text>
                    </Td>
                     <Td className={'px-6 py-4'}>
                        <Text className="text-sm">
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


