import { Document, model, Model, Schema } from "mongoose";

export interface IUserMock extends Document {
    ipAddr: string;
    userId: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    userData: Record<any, any>
}

const userMockSchema = new Schema({
    ipAddr: {type: String, required: true},
    userId: {type: String, default: '1234'},
    userData: {type: Object, required: true}
}, {
    timestamps: true
})

const UserMock: Model<IUserMock> = model<IUserMock>('UserMock', userMockSchema)

export default UserMock