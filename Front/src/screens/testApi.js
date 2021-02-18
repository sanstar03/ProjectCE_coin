import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

const Nissan = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const [isloggedin,setloggedin] = useState(true);
  



  return (
    <View style={{ flex: 1, padding: 24 }}>
        <Text>{data}</Text>
    </View>
  );
};

export default Nissan;