## Tes Pengetahuan

1. Sudah berapa lama anda mulai menggunakan React Native ?
2 tahun, sejak 2018

2. Apa saja library React Native  yang sering atau biasa anda pakai? Jelaskan kegunaannya bagi anda.
 - ignite-cli, sebuah boilerplate yang memudahkan untuk init project react-native
 - redux=saga, library untuk state management yang cocok untuk aplikasi scalable
 - formik & yup, library untuk form
 - react-native-vector-icons, untuk menampilkan berbagai macam jenis icons
 - react-navigation, library untuk navigasi pada react-native
 - apisauce, library untuk standarisasi axios
 - dayjs, alternatif library momentjs (momentjs sudah tidak dimaintenance lagi)
 - react-native-config, library untuk menggunakan `.env` pada react-native
 - react-native-i18n, library untuk multi bahasa

3. Jelaskan penerapan clean code atau design pattern yang biasa anda gunakan dan manfaatnya untuk anda.
Styling terpisah dengan file view, indent space 2, menggunakan shorthand function, menggunakan ES5, ES6, ES7, ES2020

4. Apakah tantangan terbesar yang pernah anda temui dalam mengerjakan aplikasi React Native dan bagaimana anda menyelesaikannya dari sisi engineering?
Dari sisi native module karena kurang memahami Java dan Swift/Objective-C

5. Jelaskan teknik-teknik apa saja yang dapat meningkatkan performance dan keamanan sebuah aplikasi React Native.
- Mengaktifkan fitur hermesEngine
- Mengaktifkan fitur enableSeparateBuildPerCPUArchitecture
- Meminimalisir penggunaan/ketergantungan terhadap dependency/library
- Tidak menggunakan dependency pre-defined component seperti NativeBase
