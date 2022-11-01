const express = require('express');
const bodyParser = require('body-parser')

const router = express.Router();

const app = express()
app.use(bodyParser.json())


/**
 * @swagger
 *  /tiktok/users/{username}:
 *    get:
 *      summary: "Get user information"
 *      operationId: "TikTokUserInfo"
 *      produces:
 *        - "application/json"
 *      parameters:
 *        - name: "username"
 *          in: "path"
 *          required: true
 *          description: "Unique identifier of the TikTok account (username) for whom to return results."
 *          schema:
 *            type: "string"
 *      responses:
 *        200:
 *          description: "success"
 *          content:
 *            application/json:
 *              schema:
 *                type: "object"
 *                properties:
 *                  data:
 *                    $ref: "#/components/schemas/TikTokUser"
 *                  data_version:
 *                    type: "string"
 *                    format: "date-time"
 *                    description: "Data time at the time of the request."
 *                    example: "2021-01-01T00:00:00.000Z"
 *      x-codeSamples:
 *       - lang: cURL
 *         source: "curl --request GET --url 'https://social-api.wisesight.dev/tiktok/users/test'"
 *      tags:
 *        - "TikTok"
 */

router.get('/tiktok/users/bietheska', (req, res) => {
    res.send("bietheska")
})


// /**
//  * @swagger
//  * /users:
//  *   get:
//  *     summary: Retrieve a list of JSONPlaceholder users.
//  *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
//  *     responses:
//  *       200:
//  *         description: Get Hello World.
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  *               properties:
//  *                 data:
//  *                   type: array
//  *                   items:
//  *                     $ref: '#/components/schemas/User'      
//  *                     
//  */
// router.get('/hello-world', (req, res) => {
//     res.send("Hello World in route")
// })

// /**
//  * @swagger
//  * /hello/{username}:
//  *      get:
//  *          parameters:
//  *            - in: path
//  *              name: username
//  *              require: true
//  *          summary: Get Hello username
//  *          description: Retrieve a user by username
//  *          responses:
//  *            200:
//  *              description: Get user info by username
//  *              content:    
//  *                application/json:
//  *                  schema:
//  *                     type: object
//  *                     properties:
//  *                        data:
//  *                          type: array
//  *                          items:
//  *                              type: object
//  *                              properties:
//  *                                  username:
//  *                                     type: string
//  *                                     description: The username
//  *                          example:
//  *                            - username: "test1"
//  *                            - username: "test2"                    
//  * 
//  */


// router.get('/hello/:username', (req, res) => {
//     res.send({"data": 
//             [
//                 {"username": req.params.username}
//             ]
//         })
// })

// /**
//  * @swagger
//  * /add-user:
//  *   post:
//  *     summary: Retrieve a list of JSONPlaceholder users.
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               name:
//  *                 type: string
//  *                 example: Pang
//  *     responses:
//  *       201:
//  *         description: Get Hello World.
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  *               properties:
//  *                 user:
//  *                  type: string
//  *                  example: "testttt"
//  *                           
//  *                     
//  */

// router.post('/add-user', (req, res) => {
//     res.send({"user": "testsss"})
// })

module.exports = router;
