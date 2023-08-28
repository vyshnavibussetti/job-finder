import { render, screen } from '@testing-library/react'
import AppHeader from './AppHeader';

test("App renders successfully", () => {
    render(<AppHeader/>);
    const element = screen.getByText(/Job/i);
    expect(element).toBeInTheDocument();
})