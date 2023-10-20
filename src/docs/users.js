/**
 * @swagger
 * /api/klab/user/newuser:
 *   post:
 *     summary: Register a new user.
 *     tags: [users]
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               Fname:
 *                 type: string
 *               Lname:
 *                 type: string
 *               Email:
 *                 type: string
 *               Password:
 *                 type: string
 *               Profile:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: User registered successfully.
 *       500:
 *         description: Registration failed.
 * /api/klab/user/read:
 *   get:
 *     summary: Get a list of all registered users.
 *     tags: [users]
 *     
 *     responses:
 *       200:
 *         description: Successfully retrieved a list of all users.
 *       500:
 *         description: Failed to retrieve user data.
 * /api/klab/user/read/{id}:
 *   get:
 *     summary: Get a single user by their ID.
 *     tags: [users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user to retrieve.
 *     responses:
 *       200:
 *         description: Successfully retrieved the user.
 *       404:
 *         description: User not found with the provided ID.
 *       500:
 *         description: Failed to retrieve user data.
 * 
 * /api/klab/user/delete/{id}:
 *   delete:
 *     summary: Delete a user by their ID.
 *     tags: [users]
 *     
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user to delete.
 *     responses:
 *       200:
 *         description: User information deleted successfully.
 *       404:
 *         description: User not found with the provided ID.
 *       500:
 *         description: Failed to delete user data.
 * 
 * /api/klab/user/update/{id}:
 *   put:
 *     summary: Update a user's information by their ID.
 *     tags: [users]
 *     
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user to update.
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               Fname:
 *                 type: string
 *               Lname:
 *                 type: string
 *               Email:
 *                 type: string
 *               Password:
 *                 type: string
 *               Profile:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: User information updated successfully.
 *       404:
 *         description: User not found with the provided ID.
 *       500:
 *         description: Failed to update user data.
 *  
 * /api/klab/user/login:
 *   post:
 *     summary: Authenticate a user for login.
 *     tags: [login]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Email:
 *                 type: string
 *               Password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User login successful.
 *       404:
 *         description: User not found with the provided email or incorrect password.
 *       500:
 *         description: Login failed.
 * 

 */





