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
 *               blogImage:
 *                 type: string
 *                 format: binary
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
 *         description: blog registered successfully.
 *       500:
 *         description: failed.
 * 
 *
 * /api/klab/blog/read:
 *   get:
 *     summary: Get a list of all blogs.
 *     tags: [blog]
 *     
 *     responses:
 *       200:
 *         description: Successfully retrieved a list of all blogs.
 *       500:
 *         description: Failed to retrieve blog.
 * 
 * /api/klab/blog/read/{id}:
 *   get:
 *     summary: Get a single blog by their ID.
 *     tags: [blog]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the blogr to retrieve.
 *     responses:
 *       200:
 *         description: Successfully retrieved the blog.
 *       404:
 *         description: blog not found with the provided ID.
 *       500:
 *         description: Failed to retrieve blog data.
 * 
 * /api/klab/blog/delete/{id}:
 *   delete:
 *     summary: Delete ablog by their ID.
 *     tags: [blog]
 *     
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the blog to delete.
 *     responses:
 *       200:
 *         description: blog deleted successfully.
 *       404:
 *         description: blog not found with the provided ID.
 *       500:
 *         description: Failed to delete blog.
 * /api/klab/blog/update/{id}:
 *   put:
 *     summary: Update blog by their ID.
 *     tags: [blog]
 *     
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the blog to update.
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               blogImage:
 *                 type: string
 *                 format: binary
 *               Pholder:
 *                 type: string
 *               description:
 *                 type: string
 *               author:
 *                 type: string
 *               authorP:
 *                 type: string
 *     responses:
 *       200:
 *         description: blog updated successfully.
 *       404:
 *         description: blog not found with the provided ID.
 *       500:
 *         description: Failed to update blog data.
 *  
 * 
 */