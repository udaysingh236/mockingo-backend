import UserMock, { IUserMock } from '../models/userMock.model';
import logger from '../utils/logger';

export async function createUserMock(ipAddr: string, userData: IUserMock['userData']): Promise<{ status: number }> {
    try {
        await UserMock.create({
            ipAddr,
            userData,
        });

        return {
            status: 201,
        };
    } catch (error) {
        logger.error(`Error in createUserMock, error is: ${error}`);
        return {
            status: 500,
        };
    }
}
