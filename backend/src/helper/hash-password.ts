import bcrypt from "bcryptjs"

export const hashPassword = async (password: string):Promise<string> => {
    try {
        const salt = await bcrypt.getSalt("10")
        const hashed:string = await bcrypt.hash(password,salt)
        return hashed
    } catch (error) {
        throw new Error("Error hashing password")
    }
}