"use client"

import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import Tab1 from './tabContent/Tab1';

const onChange = (key: string) => {
    console.log(key);
};

const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Product',
        children: <Tab1 />,
    },
];

const TabHomeSec: React.FC = (): JSX.Element => {
    return (
        <div className='container px-14 mx-auto'>
            <Tabs size='large' style={{
                width: '100%',
            }} defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
    )
}

export default TabHomeSec;