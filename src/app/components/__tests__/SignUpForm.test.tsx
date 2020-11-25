import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import { SignUpForm } from '../SignUpForm/SignUpForm';

describe('sign up', () => {
    it('check validation', async () => {
        const incorrectUser = {
            username: 'testuser10',
            email: 'testuse10gmail.com',
            password: 'testuser10',
            confirm: 'testuser100',
        }

        render(<SignUpForm />);
        screen.debug();

        const input_username = screen.getByPlaceholderText(/name/i);
        const input_email = screen.getByPlaceholderText(/email/i);
        const input_password = screen.getByPlaceholderText(/password/i);
        const input_confirm = screen.getByPlaceholderText(/confirm/i);

        fireEvent.change(input_username, { target: { value: incorrectUser.username } });
        fireEvent.change(input_email, { target: { value: incorrectUser.email } });
        fireEvent.change(input_password, { target: { value: incorrectUser.password } });
        fireEvent.change(input_confirm, { target: { value: incorrectUser.confirm } });

        await waitFor(() => {
            fireEvent(
              screen.getByText(/sign up/i),
              new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
              }),
            );
          });
      
          await waitFor(() =>
          expect(screen.queryByText('Data is not correct')).toBeTruthy(),
          );
    })
})