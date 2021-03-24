import React from 'react';
import App from '../App'
import { render, screen }  from '@testing-library/react' 


it('Checks text on the Component', ()=>{
    render(<App/>)
    expect(screen.getByRole('heading')).toBeTruthy()
})