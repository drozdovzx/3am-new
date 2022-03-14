import React from 'react';

const Border = () => {
    return (
        <div style={{
            width: '100%',
            height: '1px',
            backgroundColor: '#b7a37e',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <div style={{
                width: '9px',
                height: '9px',
                backgroundColor: '#b7a37e',
                borderRadius: '100%',
                marginLeft: '96px',
                transform: 'translateY(-4px)',
            }}/>
            <div style={{
                width: '9px',
                height: '9px',
                backgroundColor: '#b7a37e',
                borderRadius: '100%',
                marginRight: '96px',
                transform: 'translateY(-4px)',
            }}/>
        </div>
    )
}
export default Border;