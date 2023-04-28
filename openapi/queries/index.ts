import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from "@tanstack/react-query";
import { User } from "../requests/models/User";
import { Tag } from "../requests/models/Tag";
import { Pet } from "../requests/models/Pet";
import { Order } from "../requests/models/Order";
import { Customer } from "../requests/models/Customer";
import { Category } from "../requests/models/Category";
import { ApiResponse } from "../requests/models/ApiResponse";
import { Address } from "../requests/models/Address";
import { UserService } from "../requests/services/UserService";
import { StoreService } from "../requests/services/StoreService";
import { PetService } from "../requests/services/PetService";
export const useUserServiceCreateUser = (options?: Omit<UseMutationOptions<Awaited<ReturnType<typeof UserService.createUser>>, unknown, {
    requestBody?: User;
}, unknown>, "mutationFn">) => useMutation(({ requestBody }) => UserService.createUser(requestBody), options);
export const useUserServiceCreateUsersWithListInput = (options?: Omit<UseMutationOptions<Awaited<ReturnType<typeof UserService.createUsersWithListInput>>, unknown, {
    requestBody?: Array<User>;
}, unknown>, "mutationFn">) => useMutation(({ requestBody }) => UserService.createUsersWithListInput(requestBody), options);
export const useUserServiceLoginUserKey = "UserServiceLoginUser";
export const useUserServiceLoginUser = <TQueryKey extends Array<unknown> = unknown[]>({ username, password }: {
    username?: string;
    password?: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<Awaited<ReturnType<typeof UserService.loginUser>>, unknown, Awaited<ReturnType<typeof UserService.loginUser>>, unknown[]>, "queryKey" | "queryFn" | "initialData">) => useQuery([useUserServiceLoginUserKey, ...(queryKey ?? [{ username, password }])], () => UserService.loginUser(username, password), options);
export const useUserServiceLogoutUserKey = "UserServiceLogoutUser";
export const useUserServiceLogoutUser = <TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<Awaited<ReturnType<typeof UserService.logoutUser>>, unknown, Awaited<ReturnType<typeof UserService.logoutUser>>, unknown[]>, "queryKey" | "queryFn" | "initialData">) => useQuery([useUserServiceLogoutUserKey, ...(queryKey ?? [])], () => UserService.logoutUser(), options);
export const useUserServiceGetUserByNameKey = "UserServiceGetUserByName";
export const useUserServiceGetUserByName = <TQueryKey extends Array<unknown> = unknown[]>({ username }: {
    username: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<Awaited<ReturnType<typeof UserService.getUserByName>>, unknown, Awaited<ReturnType<typeof UserService.getUserByName>>, unknown[]>, "queryKey" | "queryFn" | "initialData">) => useQuery([useUserServiceGetUserByNameKey, ...(queryKey ?? [{ username }])], () => UserService.getUserByName(username), options);
export const useUserServiceUpdateUser = (options?: Omit<UseMutationOptions<Awaited<ReturnType<typeof UserService.updateUser>>, unknown, {
    username: string;
    requestBody?: User;
}, unknown>, "mutationFn">) => useMutation(({ username, requestBody }) => UserService.updateUser(username, requestBody), options);
export const useUserServiceDeleteUser = (options?: Omit<UseMutationOptions<Awaited<ReturnType<typeof UserService.deleteUser>>, unknown, {
    username: string;
}, unknown>, "mutationFn">) => useMutation(({ username }) => UserService.deleteUser(username), options);
export const useStoreServiceGetInventoryKey = "StoreServiceGetInventory";
export const useStoreServiceGetInventory = <TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<Awaited<ReturnType<typeof StoreService.getInventory>>, unknown, Awaited<ReturnType<typeof StoreService.getInventory>>, unknown[]>, "queryKey" | "queryFn" | "initialData">) => useQuery([useStoreServiceGetInventoryKey, ...(queryKey ?? [])], () => StoreService.getInventory(), options);
export const useStoreServicePlaceOrder = (options?: Omit<UseMutationOptions<Awaited<ReturnType<typeof StoreService.placeOrder>>, unknown, {
    requestBody?: Order;
}, unknown>, "mutationFn">) => useMutation(({ requestBody }) => StoreService.placeOrder(requestBody), options);
export const useStoreServiceGetOrderByIdKey = "StoreServiceGetOrderById";
export const useStoreServiceGetOrderById = <TQueryKey extends Array<unknown> = unknown[]>({ orderId }: {
    orderId: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<Awaited<ReturnType<typeof StoreService.getOrderById>>, unknown, Awaited<ReturnType<typeof StoreService.getOrderById>>, unknown[]>, "queryKey" | "queryFn" | "initialData">) => useQuery([useStoreServiceGetOrderByIdKey, ...(queryKey ?? [{ orderId }])], () => StoreService.getOrderById(orderId), options);
export const useStoreServiceDeleteOrder = (options?: Omit<UseMutationOptions<Awaited<ReturnType<typeof StoreService.deleteOrder>>, unknown, {
    orderId: number;
}, unknown>, "mutationFn">) => useMutation(({ orderId }) => StoreService.deleteOrder(orderId), options);
export const usePetServiceUpdatePet = (options?: Omit<UseMutationOptions<Awaited<ReturnType<typeof PetService.updatePet>>, unknown, {
    requestBody: Pet;
}, unknown>, "mutationFn">) => useMutation(({ requestBody }) => PetService.updatePet(requestBody), options);
export const usePetServiceAddPet = (options?: Omit<UseMutationOptions<Awaited<ReturnType<typeof PetService.addPet>>, unknown, {
    requestBody: Pet;
}, unknown>, "mutationFn">) => useMutation(({ requestBody }) => PetService.addPet(requestBody), options);
export const usePetServiceFindPetsByStatusKey = "PetServiceFindPetsByStatus";
export const usePetServiceFindPetsByStatus = <TQueryKey extends Array<unknown> = unknown[]>({ status }: {
    status?: "available" | "pending" | "sold";
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<Awaited<ReturnType<typeof PetService.findPetsByStatus>>, unknown, Awaited<ReturnType<typeof PetService.findPetsByStatus>>, unknown[]>, "queryKey" | "queryFn" | "initialData">) => useQuery([usePetServiceFindPetsByStatusKey, ...(queryKey ?? [{ status }])], () => PetService.findPetsByStatus(status), options);
export const usePetServiceFindPetsByTagsKey = "PetServiceFindPetsByTags";
export const usePetServiceFindPetsByTags = <TQueryKey extends Array<unknown> = unknown[]>({ tags }: {
    tags?: Array<string>;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<Awaited<ReturnType<typeof PetService.findPetsByTags>>, unknown, Awaited<ReturnType<typeof PetService.findPetsByTags>>, unknown[]>, "queryKey" | "queryFn" | "initialData">) => useQuery([usePetServiceFindPetsByTagsKey, ...(queryKey ?? [{ tags }])], () => PetService.findPetsByTags(tags), options);
export const usePetServiceGetPetByIdKey = "PetServiceGetPetById";
export const usePetServiceGetPetById = <TQueryKey extends Array<unknown> = unknown[]>({ petId }: {
    petId: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<Awaited<ReturnType<typeof PetService.getPetById>>, unknown, Awaited<ReturnType<typeof PetService.getPetById>>, unknown[]>, "queryKey" | "queryFn" | "initialData">) => useQuery([usePetServiceGetPetByIdKey, ...(queryKey ?? [{ petId }])], () => PetService.getPetById(petId), options);
export const usePetServiceUpdatePetWithForm = (options?: Omit<UseMutationOptions<Awaited<ReturnType<typeof PetService.updatePetWithForm>>, unknown, {
    petId: number;
    name?: string;
    status?: string;
}, unknown>, "mutationFn">) => useMutation(({ petId, name, status }) => PetService.updatePetWithForm(petId, name, status), options);
export const usePetServiceDeletePet = (options?: Omit<UseMutationOptions<Awaited<ReturnType<typeof PetService.deletePet>>, unknown, {
    petId: number;
    apiKey?: string;
}, unknown>, "mutationFn">) => useMutation(({ petId, apiKey }) => PetService.deletePet(petId, apiKey), options);
export const usePetServiceUploadFile = (options?: Omit<UseMutationOptions<Awaited<ReturnType<typeof PetService.uploadFile>>, unknown, {
    petId: number;
    additionalMetadata?: string;
    requestBody?: Blob;
}, unknown>, "mutationFn">) => useMutation(({ petId, additionalMetadata, requestBody }) => PetService.uploadFile(petId, additionalMetadata, requestBody), options);
