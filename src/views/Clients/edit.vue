<template>
  <el-form
    ref="dataForm"
    :model="temp"
    label-position="left"
    label-width="120px"
    style="width: 500px; margin-left:50px;"
  >
    <el-tabs value="first">
      <el-tab-pane
        label="名称"
        name="first"
      >
        <el-form-item
          label="客户端名称"
          prop="clientName"
        >
          <el-input
            v-model="temp.clientName"
            type="text"
          />
        </el-form-item>
        <el-form-item
          label="客户端标识"
          prop="clientId"
        >
          <el-input
            v-model="temp.clientId"
            type="text"
          />
        </el-form-item>
      </el-tab-pane>
      <el-tab-pane
        label="基本信息"
        name="second"
      >
        <el-form-item
          label="是否启用"
          prop="enabled"
        >
          <el-switch
            v-model="temp.enabled"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
        </el-form-item>
        <el-form-item
          label="描述"
          prop="description"
        >
          <el-input
            v-model="temp.description"
            type="text"
          />
        </el-form-item>
        <el-form-item
          label="协议类型"
          prop="protocolType"
        >
          <el-select
            v-model="temp.protocolType"
            placeholder=""
          >
            <el-option
              label="OpenID Connect"
              value="oidc"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="需要客户端密钥"
          prop="requireClientSecret"
        >
          <el-switch
            v-model="temp.requireClientSecret"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
        </el-form-item>
        <el-form-item
          label="需要 Pkce"
          prop="requirePkce"
        >
          <el-switch
            v-model="temp.requirePkce"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
        </el-form-item>
        <el-form-item
          label="允许纯文本 Pkce"
          prop="allowPlainTextPkce"
        >
          <el-switch
            v-model="temp.allowPlainTextPkce"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
        </el-form-item>
        <el-form-item
          label="允许离线访问"
          prop="allowOfflineAccess"
        >
          <el-switch
            v-model="temp.allowOfflineAccess"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
        </el-form-item>
        <el-form-item
          label="允许通过浏览器访问令牌"
          prop="allowAccessTokensViaBrowser"
        >
          <el-switch
            v-model="temp.allowAccessTokensViaBrowser"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
        </el-form-item>
        <el-form-item label="允许的作用域">
          <edit-item :items="temp.allowedScopes"></edit-item>
        </el-form-item>
        <el-form-item label="重定向 Uri">
          <edit-item :items="temp.redirectUris"></edit-item>
        </el-form-item>
        <el-form-item label="允许的授权类型">
          <edit-item :items="temp.allowedGrantTypes"></edit-item>
        </el-form-item>
        <el-form-item label="客户端密钥">
          <el-button type="primary">
            <a
              href="/ClientSecrets/index"
              target="_blank"
            >管理客户端密钥</a>
          </el-button>
        </el-form-item>
        <el-form-item label="属性">
          <el-button type="primary">
            <a
              href="/ClientProperties/index"
              target="_blank"
            >管理客户端属性</a>
          </el-button>
        </el-form-item>
      </el-tab-pane>
      <el-tab-pane
        label="认证/注销"
        name="third"
      >
        <el-form-item label="前端通道注销 Uri">
          <el-input
            type="text"
            v-model="temp.frontChannelLogoutUri"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="需要前端通道注销会话"
          prop="frontChannelLogoutSessionRequired"
        >
          <el-switch
            v-model="temp.frontChannelLogoutSessionRequired"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
        </el-form-item>
        <el-form-item label="后端通道退出 Uri">
          <el-input
            type="text"
            v-model="temp.backChannelLogoutUri"
          ></el-input>
        </el-form-item>
        <el-form-item label="需要后端通道注销会话">
          <el-switch
            v-model="temp.backChannelLogoutSessionRequired"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
        </el-form-item>
        <el-form-item label="启用本地登录">
          <el-switch
            v-model="temp.enableLocalLogin"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
        </el-form-item>
        <el-form-item label="注销重定向 Uri">
          <edit-item :items="temp.postLogoutRedirectUris"></edit-item>
        </el-form-item>
        <el-form-item label="身份提供程序限制">
          <edit-item :items="temp.identityProviderRestrictions"></edit-item>
        </el-form-item>
        <el-form-item label="用户 SSO 生命周期">
          <el-input
            type="text"
            v-model="temp.userSsoLifetime"
          ></el-input>
        </el-form-item>
      </el-tab-pane>
      <el-tab-pane
        label="令牌"
        name="fourth"
      >
        <el-form-item label="身份令牌生命周期">
          <el-input
            type="text"
            v-model="temp.identityTokenLifetime"
          ></el-input>
        </el-form-item>
        <el-form-item label="访问令牌生命周期">
          <el-input
            type="text"
            v-model="temp.accessTokenLifetime"
          ></el-input>
        </el-form-item>
        <el-form-item label="访问令牌类型">
          <el-select
            v-model="temp.accessTokenType"
            placeholder=""
          >
            <el-option
              label="Jwt"
              :value="0"
            ></el-option>
            <el-option
              label="Reference"
              :value="1"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="授权码生命周期">
          <el-input
            type="text"
            v-model="temp.authorizationCodeLifetime"
          ></el-input>
        </el-form-item>
        <el-form-item label="绝对刷新令牌生命周期 ">
          <el-input
            type="text"
            v-model="temp.absoluteRefreshTokenLifetime"
          ></el-input>
        </el-form-item>
        <el-form-item label="滚动刷新令牌生命周期">
          <el-input
            type="text"
            v-model="temp.slidingRefreshTokenLifetime"
          ></el-input>
        </el-form-item>
        <el-form-item label="刷新令牌使用情况">
          <el-select
            v-model="temp.refreshTokenUsage"
            placeholder=""
          >
            <el-option
              label="ReUse"
              :value="0"
            ></el-option>
            <el-option
              label="OneTimeOnly"
              :value="1"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="刷新令牌过期">
          <el-select
            v-model="temp.refreshTokenExpiration"
            placeholder=""
          >
            <el-option
              label="Sliding"
              :value="0"
            ></el-option>
            <el-option
              label="Absolute"
              :value="1"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="允许跨域来源">
          <edit-item :items="temp.allowedCorsOrigins"></edit-item>
        </el-form-item>
        <el-form-item label="刷新时更新访问令牌声明">
          <el-switch
            v-model="temp.updateAccessTokenClaimsOnRefresh"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
        </el-form-item>
        <el-form-item label="包括 Jwt 标识">
          <el-switch
            v-model="temp.includeJwtId"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
        </el-form-item>
        <el-form-item label="始终发送客户端声明">
          <el-switch
            v-model="temp.alwaysSendClientClaims"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
        </el-form-item>
        <el-form-item label="始终在身份令牌中包含用户声明">
          <el-switch
            v-model="temp.alwaysIncludeUserClaimsInIdToken"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
        </el-form-item>
        <el-form-item label="客户端声明前缀">
          <el-input
            type="text"
            v-model="temp.clientClaimsPrefix"
          ></el-input>
        </el-form-item>
        <el-form-item label="配对主体盐">
          <el-input
            type="text"
            v-model="temp.pairWiseSubjectSalt"
          ></el-input>
        </el-form-item>
        <el-form-item label="声明">
          <el-button type="primary">
            <a
              href="http://localhost:1337/ClientClaims/index"
              target="_blank"
            >管理客户端声明</a>
          </el-button>
        </el-form-item>
      </el-tab-pane>
      <el-tab-pane
        label="同意屏幕"
        name="fiveth"
      >
        <el-form-item label="需要同意">
          <el-switch
            v-model="temp.requireConsent"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
        </el-form-item>
        <el-form-item label="允许记住同意">
          <el-switch
            v-model="temp.allowRememberConsent"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
        </el-form-item>
        <el-form-item label="客户端 Uri">
          <el-input
            type="text"
            v-model="temp.clientUri"
          ></el-input>
        </el-form-item>
        <el-form-item label="徽标 Uri">
          <el-input
            type="text"
            v-model="temp.logoUri"
          ></el-input>
        </el-form-item>
      </el-tab-pane>
      <el-tab-pane
        label="设备流程"
        name="sixth"
      >
        <el-form-item label="用户代码类型">
          <el-input
            type="text"
            v-model="temp.userCodeType"
          ></el-input>
        </el-form-item>
        <el-form-item label="设备代码生命周期">
          <el-input
            type="text"
            v-model="temp.deviceCodeLifetime"
          ></el-input>
        </el-form-item>
      </el-tab-pane>
    </el-tabs>
  </el-form>
</template>
<script>
import EditItem from './editItem'

export default {
  components: {
    EditItem
  },
  data() {
    return {
      temp: {
        clientName: '',
        clientType: '',
        enabled: true,
        requireClientSecret: true,
        requireConsent: true,
        allowRememberConsent: true,
        alwaysIncludeUserClaimsInIdToken: false,
        requirePkce: false,
        allowPlainTextPkce: false,
        allowAccessTokensViaBrowser: false,
        frontChannelLogoutUri: null,
        frontChannelLogoutSessionRequired: true,
        backChannelLogoutUri: null,
        backChannelLogoutSessionRequired: true,
        allowOfflineAccess: false,
        identityTokenLifetime: 300,
        accessTokenLifetime: 3600,
        authorizationCodeLifetime: 300,
        consentLifetime: 300,
        absoluteRefreshTokenLifetime: 2592000,
        slidingRefreshTokenLifetime: 1296000,
        refreshTokenUsage: 0,
        updateAccessTokenClaimsOnRefresh: false,
        refreshTokenExpiration: 0,
        accessTokenType: 0,
        enableLocalLogin: true,
        includeJwtId: true,
        alwaysSendClientClaims: false,
        clientClaimsPrefix: 'client_',
        pairWiseSubjectSalt: null,
        lastAccessed: '',
        userSsoLifetime: 30000,
        userCodeType: null,
        deviceCodeLifetime: 300,
        nonEditable: false
      }
    }
  }
}
</script>
