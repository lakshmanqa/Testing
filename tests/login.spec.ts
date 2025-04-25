//login by using mcp server 
//changes
import { test, expect } from '@playwright/test';

test.use({ headless: true });

test('Login and Logout Test', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://app.buat.lumafintech.com/login');

  // Fill in the email and password fields
  await page.fill('#email', 'gwimmanualtestingapprover1@lumatesting.com'); // Updated locator
  await page.fill('#password', 'sPwznELn64029E$UhrUk2KQ'); // Updated locator

  // Click the login button
  await page.click('button[type="submit"]');

  // Verify the new page URL contains the expected string
  await expect(page).toHaveURL(/https:\/\/go\.buat\.lumafintech\.com\/dashboard/);

  // Click on the GWIM Manual Testing Approver applicant icon to open the menu
  await page.click('button[aria-label="profile button"]');

  // Click on the logout option from the menu
  await page.click('text=Log Out'); // Updated selector to match the menu item text

  // Verify logout by checking the presence of the login page or URL
  await expect(page).toHaveURL('https://app.buat.lumafintech.com/login');
});