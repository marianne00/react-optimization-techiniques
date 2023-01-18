import React, { useMemo } from 'react'

const DemoList = (props) => {

  const { items } = props;
 
  const sortedList = useMemo(() => {
    console.log('item sorted')
    return props.items.sort((a, b) => a - b)
  }, [items]);

  console.log('demo list running')

  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        { sortedList.map((item) => {
          return <li key={item}>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default React.memo(DemoList)