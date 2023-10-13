/**
 * @swagger
 * /api/klab/blog/create:
 *   post:
 *     summary: create new blog.
 *     tags: [blog]
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               Pholder:
 *                 type: string
 *               description:
 *                 type: string
 *               author:
 *                 type: string
 *               authorP:
 *                 type: string
 *           
 *     responses:
 *       200:
 *         description: User registered successfully.
 *       500:
 *         description: Registration failed.
 */
