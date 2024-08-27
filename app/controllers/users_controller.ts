import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    return request;
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return params;

  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {
    return params;

  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    console.log(params)
    return request
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    return params

  }
}