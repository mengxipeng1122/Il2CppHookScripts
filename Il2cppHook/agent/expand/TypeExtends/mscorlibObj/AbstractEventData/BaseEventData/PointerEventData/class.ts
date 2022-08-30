import { GameObjectImpl as UnityEngine_GameObject } from "../../../Object/GameObject/class"
import { UnityEngine_Vector2_Impl as UnityEngine_Vector2 } from "../../../ValueType/Vector2/class"
import { UnityEngine_Vector3_Impl as UnityEngine_Vector3 } from "../../../ValueType/Vector3/class"
import { UnityEngine_EventSystems_BaseEventData_Impl as UnityEngine_EventSystems_BaseEventData } from "../class"

type UnityEngine_EventSystems_RaycastResult = NativePointer
type UnityEngine_EventSystems_EventSystem = NativePointer
type UnityEngine_Camera = NativePointer
class UnityEngine_EventSystems_PointerEventData_Impl extends UnityEngine_EventSystems_BaseEventData {

    // hovered : List<GameObject>
    hovered: NativePointer = lfv(this.handle, "hovered")
    // m_PointerPress : GameObject
    m_PointerPress: UnityEngine_GameObject = new UnityEngine_GameObject(lfv(this.handle, "m_PointerPress"))

    constructor(handleOrWrapper: NativePointer) {
        super(handleOrWrapper)
    }

    get_pointerEnter(): UnityEngine_GameObject {
        return Il2Cpp.Api.PointerEventData._get_pointerEnter(this.handle)
    }

    set_pointerEnter(value: UnityEngine_GameObject): void {
        return Il2Cpp.Api.PointerEventData._set_pointerEnter(this.handle, value)
    }

    get_lastPress(): UnityEngine_GameObject {
        return Il2Cpp.Api.PointerEventData._get_lastPress(this.handle)
    }

    set_lastPress(value: UnityEngine_GameObject): void {
        return Il2Cpp.Api.PointerEventData._set_lastPress(this.handle, value)
    }

    get_rawPointerPress(): UnityEngine_GameObject {
        return Il2Cpp.Api.PointerEventData._get_rawPointerPress(this.handle)
    }

    set_rawPointerPress(value: UnityEngine_GameObject): void {
        return Il2Cpp.Api.PointerEventData._set_rawPointerPress(this.handle, value)
    }

    get_pointerDrag(): UnityEngine_GameObject {
        return Il2Cpp.Api.PointerEventData._get_pointerDrag(this.handle)
    }

    set_pointerDrag(value: UnityEngine_GameObject): void {
        return Il2Cpp.Api.PointerEventData._set_pointerDrag(this.handle, value)
    }

    get_pointerClick(): UnityEngine_GameObject {
        return Il2Cpp.Api.PointerEventData._get_pointerClick(this.handle)
    }

    set_pointerClick(value: UnityEngine_GameObject): void {
        return Il2Cpp.Api.PointerEventData._set_pointerClick(this.handle, value)
    }

    get_pointerCurrentRaycast(): UnityEngine_EventSystems_RaycastResult {
        return Il2Cpp.Api.PointerEventData._get_pointerCurrentRaycast(this.handle)
    }

    set_pointerCurrentRaycast(value: UnityEngine_EventSystems_RaycastResult): void {
        return Il2Cpp.Api.PointerEventData._set_pointerCurrentRaycast(this.handle, value)
    }

    get_pointerPressRaycast(): UnityEngine_EventSystems_RaycastResult {
        return Il2Cpp.Api.PointerEventData._get_pointerPressRaycast(this.handle)
    }

    set_pointerPressRaycast(value: UnityEngine_EventSystems_RaycastResult): void {
        return Il2Cpp.Api.PointerEventData._set_pointerPressRaycast(this.handle, value)
    }

    get_eligibleForClick(): boolean {
        return Il2Cpp.Api.PointerEventData._get_eligibleForClick(this.handle)
    }

    set_eligibleForClick(value: boolean): void {
        return Il2Cpp.Api.PointerEventData._set_eligibleForClick(this.handle, value)
    }

    get_pointerId(): number {
        return Il2Cpp.Api.PointerEventData._get_pointerId(this.handle)
    }

    set_pointerId(value: number): void {
        return Il2Cpp.Api.PointerEventData._set_pointerId(this.handle, value)
    }

    get_position(): UnityEngine_Vector3 {
        return Il2Cpp.Api.PointerEventData._get_position(this.handle)
    }

    set_position(value: UnityEngine_Vector2): void {
        return Il2Cpp.Api.PointerEventData._set_position(this.handle, value)
    }

    get_delta(): UnityEngine_Vector2 {
        return Il2Cpp.Api.PointerEventData._get_delta(this.handle)
    }

    set_delta(value: UnityEngine_Vector2): void {
        return Il2Cpp.Api.PointerEventData._set_delta(this.handle, value)
    }

    get_pressPosition(): UnityEngine_Vector2 {
        return Il2Cpp.Api.PointerEventData._get_pressPosition(this.handle)
    }

    set_pressPosition(value: UnityEngine_Vector2): void {
        return Il2Cpp.Api.PointerEventData._set_pressPosition(this.handle, value)
    }

    get_worldPosition(): UnityEngine_Vector3 {
        return Il2Cpp.Api.PointerEventData._get_worldPosition(this.handle)
    }

    set_worldPosition(value: UnityEngine_Vector3): void {
        return Il2Cpp.Api.PointerEventData._set_worldPosition(this.handle, value)
    }

    get_worldNormal(): UnityEngine_Vector3 {
        return Il2Cpp.Api.PointerEventData._get_worldNormal(this.handle)
    }

    set_worldNormal(value: UnityEngine_Vector3): void {
        return Il2Cpp.Api.PointerEventData._set_worldNormal(this.handle, value)
    }

    get_clickTime(): number {
        return Il2Cpp.Api.PointerEventData._get_clickTime(this.handle)
    }

    set_clickTime(value: number): void {
        return Il2Cpp.Api.PointerEventData._set_clickTime(this.handle, value)
    }

    get_clickCount(): number {
        return Il2Cpp.Api.PointerEventData._get_clickCount(this.handle)
    }

    set_clickCount(value: number): void {
        return Il2Cpp.Api.PointerEventData._set_clickCount(this.handle, value)
    }

    get_scrollDelta(): UnityEngine_Vector2 {
        return Il2Cpp.Api.PointerEventData._get_scrollDelta(this.handle)
    }

    set_scrollDelta(value: UnityEngine_Vector2): void {
        return Il2Cpp.Api.PointerEventData._set_scrollDelta(this.handle, value)
    }

    get_useDragThreshold(): boolean {
        return Il2Cpp.Api.PointerEventData._get_useDragThreshold(this.handle)
    }

    set_useDragThreshold(value: boolean): void {
        return Il2Cpp.Api.PointerEventData._set_useDragThreshold(this.handle, value)
    }

    get_dragging(): boolean {
        return Il2Cpp.Api.PointerEventData._get_dragging(this.handle)
    }

    set_dragging(value: boolean): void {
        return Il2Cpp.Api.PointerEventData._set_dragging(this.handle, value)
    }

    get_button(): UnityEngine_EventSystems_PointerEventData_InputButton {
        return Il2Cpp.Api.PointerEventData._get_button(this.handle)
    }

    set_button(value: UnityEngine_EventSystems_PointerEventData_InputButton): void {
        return Il2Cpp.Api.PointerEventData._set_button(this.handle, value)
    }

    __ctor(eventSystem: UnityEngine_EventSystems_EventSystem): void {
        return Il2Cpp.Api.PointerEventData.__ctor(this.handle, eventSystem)
    }

    IsPointerMoving(): boolean {
        return Il2Cpp.Api.PointerEventData._IsPointerMoving(this.handle)
    }

    IsScrolling(): boolean {
        return Il2Cpp.Api.PointerEventData._IsScrolling(this.handle)
    }

    get_enterEventCamera(): UnityEngine_Camera {
        return Il2Cpp.Api.PointerEventData._get_enterEventCamera(this.handle)
    }

    get_pressEventCamera(): UnityEngine_Camera {
        return Il2Cpp.Api.PointerEventData._get_pressEventCamera(this.handle)
    }

    get_pointerPress(): UnityEngine_GameObject {
        return Il2Cpp.Api.PointerEventData._get_pointerPress(this.handle)
    }

    set_pointerPress(value: UnityEngine_GameObject): void {
        return Il2Cpp.Api.PointerEventData._set_pointerPress(this.handle, value)
    }

    ToString(): string {
        return readU16(Il2Cpp.Api.PointerEventData._ToString(this.handle))
    }

}

Il2Cpp.PointerEventData = UnityEngine_EventSystems_PointerEventData_Impl

declare global {
    namespace Il2Cpp {
        class PointerEventData extends UnityEngine_EventSystems_PointerEventData_Impl { }
    }
}

export { UnityEngine_EventSystems_PointerEventData_Impl }