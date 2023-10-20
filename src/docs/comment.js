/** 
 * @swagger
 *  /api/klab/comment/blog/{blogId}/create:
 *   post:
 *     summary: Create a comment on a specific blog.
 *     tags: [comment]
 *     description: Create a new comment on a specific blog using its ID.
 *     parameters:
 *       - in: path
 *         name: blogId
 *         required: true
 *         description: The ID of the blog where the comment will be created.
 *         schema:
 *           type: string
 *       - in: body
 *         name: comment
 *         required: true
 *         description: The content of the comment.
 *         schema:
 *           type: object
 *           properties:
 *             content:
 *               type: string
 *               description: The content of the comment.
 *     responses:
 *       201:
 *         description: Comment created successfully.
 *       500:
 *         description: Failed to create comment.
 * /api/klab/comment/blog/{blogId}/comment:
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