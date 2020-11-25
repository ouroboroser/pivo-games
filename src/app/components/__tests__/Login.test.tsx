import React from 'react';
import { LoginForm } from '../LoginForm/LoginForm'; 
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom'

describe('login', () => {
    it('correct login test', async () => {
        const correctUser = {
            username: 'testuser10',
            password: 'testuser10',
        }

        render(<LoginForm />)
        screen.debug();
        
        const input_username = screen.getByPlaceholderText(/name/i);
        const input_password = screen.getByPlaceholderText(/password/i);
        
        fireEvent.change(input_username, { target: { value: correctUser.username } });
        fireEvent.change(input_password, { target: { value: correctUser.password } });

        await waitFor(() => {
            fireEvent(
              screen.getByText(/Sign in/i),
              new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
              }),
            );
          });
      
          await waitFor(() =>
            expect(screen.queryByText('Username or password cannot be empty string')).toBe(null),
          );
    });

    it('incorrect login test', async () => {
        const incorrectUser = {
            username: '',
            password: '',
        }

        render(<LoginForm />)
        screen.debug();
        
        const input_username = screen.getByPlaceholderText(/name/i);
        const input_password = screen.getByPlaceholderText(/password/i);
        
        fireEvent.change(input_username, { target: { value: incorrectUser.username } });
        fireEvent.change(input_password, { target: { value: incorrectUser.password } });

        await waitFor(() => {
            fireEvent(
              screen.getByText(/Sign in/i),
              new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
              }),
            );
          });
      
          await waitFor(() =>
            expect(screen.queryByText('Username or password cannot be empty string')).toBeTruthy(),
          );
    });
})