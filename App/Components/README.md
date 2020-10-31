# Reusable Components Doc
All reusable components are stored and organized here

## Index of Content
- [BottomPicker](#BottomPicker)
- [Button](#Button)
- [ButtonAdd](#ButtonAdd)
- [ButtonBack](#ButtonBack)
- [CategoryCard](#CategoryCard)
- [CategoryOption](#CategoryOption)
- [DatePicker](#DatePicker)
- [ExpenseItem](#ExpenseItem)
- [Input](#Input)
- [StatusBar](#StatusBar)

## BottomPicker
### Usage
```jsx harmony
import BottomPicker from './BottomPicker';

<BottomPicker {...props} />
```

### Props
| Props | Type | Default |
| ----- | ---- | ------- |
| label | String | Bottom Picker |
| value | Object | { id: 1, title: 'Makanan' } |
| options | Array of Object | [] |
| name | String | 'bottomPicker'
| setFieldValue | Function | (name, value) => alert(`Value for ${name} is ${value}`) |
| errors | String | null |

## Button
### Usage
```jsx harmony
import { Text } from 'react-native';
import Button from './Button';

<Button {...props}>
  <Text>Click Here</Text>
</Button>
```

### Props
Same as `TouchableOpacity` props

## ButtonAdd
### Usage
```jsx harmony
import ButtonAdd from './ButtonAdd';

<ButtonAdd {...props} />
```

### Props
Same as `TouchableOpacity` props

### ButtonBack
### Usage
```jsx harmony
import ButtonBack from './ButtonBack';

<ButtonBack {...props} />
```

### Props
Same as `TouchableOpacity` props

## CategoryCard
### Usage
```jsx harmony
import CategoryCard from './CategoryCard';

<CategoryCard {...props} />
```

### Props
| Props | Type | Default |
| ----- | ---- | ------- |
| item | Object | {} |
| cardStyle | Style | null |

## CategoryOption
### Usage
```jsx harmony
import CategoryOption from './CategoryOption';

<CategoryOption {...props} />
```

### Props
| Props | Type | Default |
| ----- | ---- | ------- |
| item | Object | {} |
| onSelect | Function | (item) => alert(`${item?.id} is selected`) |

## DatePicker
### Usage
```jsx harmony
import DatePicker from './DatePicker';

<DatePicker {...props} />
```

### Props
| Props | Type | Default |
| ----- | ---- | ------- |
| label | String | Pilih Tanggal |
| name | String | date |
| value | String | new Date().toString() |
| errors | String | null |
| setFieldValue | Function | (name, value) => alert(`Value for ${name} is ${value}`) |

## ExpenseItem
### Usage
```jsx harmony
import ExpenseItem from './ExpenseItem';

<ExpenseItem {...props} />
```

### Props
| Props | Type | Default |
| ----- | ---- | ------- |
| item | Object | {} |

## Input
### Usage
```jsx harmony
import Input from './Input';

<Input {...props} />
```

### Props
| Props | Type | Default |
| ----- | ---- | ------- |
| label | String | Input Label |
| name | String | name |
| value | String | '' |
| setFieldValue | Function | (name, value) => alert(`Value for ${name} is ${value}`) |
| errors | String | null |
| prefix | React Element | null |

## StatusBar
### Usage
```jsx harmony
import StatusBar from './StatusBar';

<StatusBar {...props} />
```

### Props
| Props | Type | Default |
| ----- | ---- | ------- |
| backgroundColor | String | #ffffff |
| barStyle | String | dark-content |
| header | Boolean | true |
