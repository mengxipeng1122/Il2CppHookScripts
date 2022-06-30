import { mscorlib_System_Object_impl } from "../class";

class mscorlib_System_Type_impl extends mscorlib_System_Object_impl implements mscorlib_System_Type {

    Equals_obj(obj: any): boolean {
        return mscorlib.Api.Type._Equals_obj(this.handle, obj);
    }

    Equals_type(type: mscorlib_System_Type_impl): boolean {
        return mscorlib.Api.Type._Equals_type(this.handle, type.handle);
    }

    GetArrayRank(): number {
        return mscorlib.Api.Type._GetArrayRank(this.handle).toInt32();
    }

    GetConstructor(types: mscorlib_System_Type_impl[]) {
        return mscorlib.Api.Type._GetConstructor(this.handle, types[0].handle);
    }

    GetEnumName(obj: any): string {
        return readU16(mscorlib.Api.Type._GetEnumName(this.handle, obj));
    }

    GetEnumNames(): string[] {
        return mscorlib.Api.Type._GetEnumNames(this.handle);
    }

    GetHashCode(): number {
        return mscorlib.Api.Type._GetHashCode(this.handle).toInt32();
    }

    GetType_0(): mscorlib_System_Type {
        return new mscorlib_System_Type_impl(mscorlib.Api.Type._GetType_0(this.handle));
    }

    GetType_1(typeName: string): mscorlib_System_Type {
        return new mscorlib_System_Type_impl(mscorlib.Api.Type._GetType_1(this.handle, typeName));
    }

    toString(): string {
        return readU16(mscorlib.Api.Type._ToString(this.handle));
    }

    get name(): string {
        return this.toString().split('Type: ')[1];
    }

}

declare global {
    namespace mscorlib {
        class Type extends mscorlib_System_Type_impl { }
    }
}

mscorlib.Type = mscorlib_System_Type_impl;

export { mscorlib_System_Type_impl }