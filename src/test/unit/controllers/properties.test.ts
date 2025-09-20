import { describe } from 'node:test'
import controller from '../../../controllers/properties'
import { ObjectIdValidator } from '../../../controllers/validators'
import { PropertyModel } from '../../../models'
import { Request, Response } from 'express'

let testProperties = [
  {
    _id: '1',
    title: 'Test Property',
  },
  {
    _id: '2',
    title: 'Test Property2',
  },
]

let request = {} as Request
let response = {} as Response

describe('Unit Test: Property controller', () => {
  beforeEach(() => {
    request = {
      user: {
        _id: '12345',
        role: 'admin',
      },
    } as unknown as Request

    response = {
      status: jest.fn(() => response),
      json: jest.fn((res) => res),
    } as unknown as Response

    //Models
    // mocking Model.find
    PropertyModel.find = jest.fn().mockResolvedValue(testProperties)
    // mocking function findById
    PropertyModel.findById = jest.fn().mockResolvedValue(testProperties[0])

    //Validators
    ObjectIdValidator.validate = jest
      .fn()
      .mockReturnValue({ value: { id: '1' } })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('should call find method', async () => {
    await controller.getAllProperties(request, response)

    expect(PropertyModel.find).toHaveBeenCalled()
    expect(response.status).toHaveBeenCalledWith(200)
    expect(response.status(200).json).toHaveBeenCalledWith(testProperties)
  })

  test('should call FindById', async () => {
    request.params = { id: '1' }
    await controller.getPropertyById(request, response)

    expect(ObjectIdValidator.validate).toHaveBeenCalled()
    expect(PropertyModel.findById).toHaveBeenCalled()
    expect(response.status).toHaveBeenCalledWith(200)
    expect(response.status(200).json).toHaveBeenCalledWith(testProperties[0])
  })
})
