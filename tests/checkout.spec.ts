import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('Checkout Tests', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('complete checkout flow', async ({ page }) => {
    // 商品をカートに追加
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    
    // カートに移動
    const cartPage = new CartPage(page);
    await cartPage.goto();
    expect(await cartPage.getCartItemCount()).toBe(1);
    
    // チェックアウト開始
    await cartPage.checkout();
    
    // 情報入力
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.fillInformation('Masato', 'Nakamura', '123-4567');
    await checkoutPage.continue();
    
    // 購入完了
    await checkoutPage.finish();
    await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
  });

  test('checkout fails without information', async ({ page }) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    
    const cartPage = new CartPage(page);
    await cartPage.goto();
    await cartPage.checkout();
    
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.continue();
    
    await expect(checkoutPage.errorMessage).toBeVisible();
  });
});