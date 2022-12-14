/**
 * @swagger
 *  components:
 *      schemas:
 *          User:
 *            type: object
 *            properties:
 *              id:
 *                type: integer
 *                description: The user ID.
 *                example: 0
 *              name:
 *                type: string
 *                description: The user's name.
 *                example: Leanne Graham
 *              user:
 *                type: integer
 *                description: The user ID.
 *                example: 1
 *              username:
 *                  type: string
 *                  example: ["test", "test2"]     
 *          TikTokUser:
 *            type: "object"
 *            description: "The information about this user."
 *            properties:
 *              id:
 *                type: "string"
 *                description: "Unique identifier of this user."
 *                example: "6532283675193802754"
 *              username:
 *                type: "string"
 *                description: "The TikTok handle (username) of this user."
 *                example: "janeydm"
 *              display_name:
 *                type: "string"
 *                description: "The friendly name of this user, as shown on their profile."
 *                example: "รัชนก สุวรรณเกตุ"
 *              description:
 *                type: "string"
 *                description: "The text of this user's profile description (also known as bio), if the user provided one."
 *                example: "FB : รัชนก สุวรรณเกตุ\nIG : janey_suwannaket\nYoutube : ค่ายเพลง ได้หมดถ้าสดชื่น"
 *              profile_url:
 *                type: "string"
 *                format: "uri"
 *                description: "The URL specified in the user's profile."
 *                example: "https://www.tiktok.com/@janeydm"
 *              profile_image_url:
 *                type: "string"
 *                format: "uri"
 *                description: "The URL to the profile image for this user, as shown on the user's profile."
 *                example: "https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/e1903e9d24ec6a2913af44628a7bf013.jpeg?x-expires=1613552400&x-signature=fbmyQRYg7ePlQtRTUnGsSxm9aO4%3D"
 *              created_time:
 *                type: "string"
 *                format: "date-time"
 *                description: "Creation time of the User."
 *                example: "2018-03-13T06:23:02.000Z"
 *              verified_status:
 *                type: "boolean"
 *                description: "Indicate if this user is a verified TikTok user."
 *                example: false
 *              private_account:
 *                type: "boolean"
 *                description: "Indicates if this user has chosen to protect their Videos (in other words, if this user's Videos are private)."
 *                example: false
 *              statistics:
 *                type: "object"
 *                description: "Statistics for the User at the time of the request."
 *                properties:
 *                  follower_count:
 *                    type: "integer"
 *                    format: "int32"
 *                    minimum: 0
 *                    description: "Number of Follower of this User."
 *                    example: 12000000
 *                  following_count:
 *                    type: "integer"
 *                    format: "int32"
 *                    minimum: 0
 *                    description: "Number of Following of this User."
 *                    example: 409
 *                  heart_count:
 *                    type: "integer"
 *                    format: "int32"
 *                    minimum: 0
 *                    description: "Number of Likes of this User."
 *                    example: 336400000
 *                  video_count:
 *                    type: "integer"
 *                    format: "int32"
 *                    minimum: 0
 *                    description: "Number of videos of this User."
 *                    example: 805
 *                  digg_count:
 *                    type: "integer"
 *                    format: "int32"
 *                    nullable: true
 *                    description: "Number of Likes on other users of this User."
 *                    example: null 
  */