/** 
 * @swagger
 *  /api/klab/comment/create/{id}:
 *   post:
 *     summary: Create a comment on a specific blog.
 *     tags: [comment]
 *     description: Create a new comment on a specific blog using its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the blog to update.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *              
 *     responses:
 *       201:
 *         description: Comment created successfully.
 *       500:
 *         description: Failed to create comment.
 * /api/klab/comment/get/{id}:
 *   get:
 *     summary: Get all comments on blog by their ID.
 *     tags: [comment]
 *     parameters:
 *       - in: path
 *         name: blogId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the blogr to retrieve.
 *     responses:
 *       200:
 *         description: Successfully retrieved the comments.
 *       404:
 *         description: comment not found with the provided ID.
 *       500:
 *         description: Failed to retrieve comment.

 * 
 * */