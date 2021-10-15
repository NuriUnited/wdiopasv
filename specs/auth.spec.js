import LoginPage from  '../pages/login.page';
import ProfilePage from '../pages/profile.page';

describe('Auth', () => {
    it('successful log in', async () => {
        await LoginPage.open();
        await LoginPage.login('ayeshmanova86@gmail.com', 'Kuwait2018');
        await expect(ProfilePage.iconAvatar).toBeDisplayed();
    });
});


