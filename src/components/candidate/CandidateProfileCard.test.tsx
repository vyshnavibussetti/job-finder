

import { BrowserRouter } from 'react-router-dom';
import CandidateProfileCard from './CandidateProfileCard';
import {  render, screen } from "@testing-library/react";

test("Job Card successfully", () => {
     render(
        <BrowserRouter>
          <CandidateProfileCard/>
          </BrowserRouter>
      );
  
      const element = screen.getByText(/projects/i);
      expect(element).toBeInTheDocument();
});
