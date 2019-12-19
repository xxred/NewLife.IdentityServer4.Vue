<template>
  <el-form
    ref="dataForm"
    :model="temp"
    label-position="left"
    label-width="120px"
    style="width: 500px; margin-left:50px;"
  >
    <el-tabs value="first">
      <el-tab-pane label="名称" name="first">
        <el-form-item label="客户端名称" prop="ClientName">
          <el-input v-model="temp.ClientName" type="text" />
        </el-form-item>
        <el-form-item label="客户端标识" prop="ClientId">
          <el-input v-model="temp.ClientId" type="text" />
        </el-form-item>
      </el-tab-pane>
      <el-tab-pane label="基本信息" name="second">
        <el-form-item label="是否启用" prop="Enabled">
          <el-switch
            v-model="temp.Enabled"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
        </el-form-item>
        <el-form-item label="描述" prop="Description">
          <el-input v-model="temp.Description" type="text" />
        </el-form-item>
        <el-form-item label="协议类型" prop="ProtocolType">
          <el-select v-model="temp.ProtocolType" placeholder="">
            <el-option label="OpenID Connect" value="oidc"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="需要客户端密钥" prop="RequireClientSecret">
          <el-switch
            v-model="temp.RequireClientSecret"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
        </el-form-item>
        <el-form-item label="需要 Pkce" prop="RequirePkce">
          <el-switch
            v-model="temp.RequirePkce"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
        </el-form-item>
        <el-form-item label="允许纯文本 Pkce" prop="AllowPlainTextPkce">
          <el-switch
            v-model="temp.AllowPlainTextPkce"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
        </el-form-item>
        <el-form-item label="允许离线访问" prop="AllowOfflineAccess">
          <el-switch
            v-model="temp.AllowOfflineAccess"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
        </el-form-item>
        <el-form-item
          label="允许通过浏览器访问令牌"
          prop="AllowAccessTokensViaBrowser"
        >
          <el-switch
            v-model="temp.AllowAccessTokensViaBrowser"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
        </el-form-item>
        <el-form-item label="允许的作用域">
          <edit-item :items="temp.AllowedScopes"></edit-item>
        </el-form-item>
        <el-form-item label="重定向 Uri">
          <edit-item :items="temp.RedirectUris"></edit-item>
        </el-form-item>
        <el-form-item label="允许的授权类型">
          <edit-item :items="temp.RllowedGrantTypes"></edit-item>
        </el-form-item>
        <el-form-item label="客户端密钥">
          <el-button type="primary">
            <a href="/ClientSecrets/index" target="_blank">管理客户端密钥</a>
          </el-button>
        </el-form-item>
        <el-form-item label="属性">
          <el-button type="primary">
            <a href="/ClientProperties/index" target="_blank">管理客户端属性</a>
          </el-button>
        </el-form-item>
      </el-tab-pane>
      <el-tab-pane label="认证/注销" name="third">
        <el-form-item label="前端通道注销 Uri">
          <el-input type="text" v-model="temp.FrontChannelLogoutUri"></el-input>
        </el-form-item>
        <el-form-item
          label="需要前端通道注销会话"
          prop="FrontChannelLogoutSessionRequired"
        >
          <el-switch
            v-model="temp.FrontChannelLogoutSessionRequired"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
        </el-form-item>
        <el-form-item label="后端通道退出 Uri">
          <el-input type="text" v-model="temp.BackChannelLogoutUri"></el-input>
        </el-form-item>
        <el-form-item label="需要后端通道注销会话">
          <el-switch
            v-model="temp.BackChannelLogoutSessionRequired"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
        </el-form-item>
        <el-form-item label="启用本地登录">
          <el-switch
            v-model="temp.EnableLocalLogin"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
        </el-form-item>
        <el-form-item label="注销重定向 Uri">
          <edit-item :items="temp.PostLogoutRedirectUris"></edit-item>
        </el-form-item>
        <el-form-item label="身份提供程序限制">
          <edit-item :items="temp.IdentityProviderRestrictions"></edit-item>
        </el-form-item>
        <el-form-item label="用户 SSO 生命周期">
          <el-input type="text" v-model="temp.UserSsoLifetime"></el-input>
        </el-form-item>
      </el-tab-pane>
      <el-tab-pane label="令牌" name="fourth">
        <el-form-item label="身份令牌生命周期">
          <el-input type="text" v-model="temp.IdentityTokenLifetime"></el-input>
        </el-form-item>
        <el-form-item label="访问令牌生命周期">
          <el-input type="text" v-model="temp.AccessTokenLifetime"></el-input>
        </el-form-item>
        <el-form-item label="访问令牌类型">
          <el-select v-model="temp.AccessTokenType" placeholder="">
            <el-option label="Jwt" :value="0"></el-option>
            <el-option label="Reference" :value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="授权码生命周期">
          <el-input
            type="text"
            v-model="temp.AuthorizationCodeLifetime"
          ></el-input>
        </el-form-item>
        <el-form-item label="绝对刷新令牌生命周期 ">
          <el-input
            type="text"
            v-model="temp.AbsoluteRefreshTokenLifetime"
          ></el-input>
        </el-form-item>
        <el-form-item label="滚动刷新令牌生命周期">
          <el-input
            type="text"
            v-model="temp.SlidingRefreshTokenLifetime"
          ></el-input>
        </el-form-item>
        <el-form-item label="刷新令牌使用情况">
          <el-select v-model="temp.RefreshTokenUsage" placeholder="">
            <el-option label="ReUse" :value="0"></el-option>
            <el-option label="OneTimeOnly" :value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="刷新令牌过期">
          <el-select v-model="temp.RefreshTokenExpiration" placeholder="">
            <el-option label="Sliding" :value="0"></el-option>
            <el-option label="Absolute" :value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="允许跨域来源">
          <edit-item :items="temp.AllowedCorsOrigins"></edit-item>
        </el-form-item>
        <el-form-item label="刷新时更新访问令牌声明">
          <el-switch
            v-model="temp.UpdateAccessTokenClaimsOnRefresh"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
        </el-form-item>
        <el-form-item label="包括 Jwt 标识">
          <el-switch
            v-model="temp.IncludeJwtId"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
        </el-form-item>
        <el-form-item label="始终发送客户端声明">
          <el-switch
            v-model="temp.AlwaysSendClientClaims"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
        </el-form-item>
        <el-form-item label="始终在身份令牌中包含用户声明">
          <el-switch
            v-model="temp.AlwaysIncludeUserClaimsInIdToken"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
        </el-form-item>
        <el-form-item label="客户端声明前缀">
          <el-input type="text" v-model="temp.ClientClaimsPrefix"></el-input>
        </el-form-item>
        <el-form-item label="配对主体盐">
          <el-input type="text" v-model="temp.PairWiseSubjectSalt"></el-input>
        </el-form-item>
        <el-form-item label="声明">
          <el-button type="primary">
            <a href="http://localhost:1337/ClientClaims/index" target="_blank"
              >管理客户端声明</a
            >
          </el-button>
        </el-form-item>
      </el-tab-pane>
      <el-tab-pane label="同意屏幕" name="fiveth">
        <el-form-item label="需要同意">
          <el-switch
            v-model="temp.RequireConsent"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
        </el-form-item>
        <el-form-item label="允许记住同意">
          <el-switch
            v-model="temp.AllowRememberConsent"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
        </el-form-item>
        <el-form-item label="客户端 Uri">
          <el-input type="text" v-model="temp.ClientUri"></el-input>
        </el-form-item>
        <el-form-item label="徽标 Uri">
          <el-input type="text" v-model="temp.LogoUri"></el-input>
        </el-form-item>
      </el-tab-pane>
      <el-tab-pane label="设备流程" name="sixth">
        <el-form-item label="用户代码类型">
          <el-input type="text" v-model="temp.UserCodeType"></el-input>
        </el-form-item>
        <el-form-item label="设备代码生命周期">
          <el-input type="text" v-model="temp.DeviceCodeLifetime"></el-input>
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
  props: ['temp', 'refDataForm'],
  // data() {
  //   return {
  //     defaultData: {
  //       ClientName: '',
  //       ClientType: '',
  //       Enabled: true,
  //       RequireClientSecret: true,
  //       RequireConsent: true,
  //       AllowRememberConsent: true,
  //       AlwaysIncludeUserClaimsInIdToken: false,
  //       RequirePkce: false,
  //       AllowPlainTextPkce: false,
  //       AllowAccessTokensViaBrowser: false,
  //       FrontChannelLogoutUri: null,
  //       FrontChannelLogoutSessionRequired: true,
  //       BackChannelLogoutUri: null,
  //       BackChannelLogoutSessionRequired: true,
  //       AllowOfflineAccess: false,
  //       IdentityTokenLifetime: 300,
  //       AccessTokenLifetime: 3600,
  //       AuthorizationCodeLifetime: 300,
  //       ConsentLifetime: 300,
  //       AbsoluteRefreshTokenLifetime: 2592000,
  //       SlidingRefreshTokenLifetime: 1296000,
  //       RefreshTokenUsage: 0,
  //       UpdateAccessTokenClaimsOnRefresh: false,
  //       RefreshTokenExpiration: 0,
  //       AccessTokenType: 0,
  //       EnableLocalLogin: true,
  //       IncludeJwtId: true,
  //       AlwaysSendClientClaims: false,
  //       ClientClaimsPrefix: 'client_',
  //       PairWiseSubjectSalt: null,
  //       LastAccessed: '',
  //       UserSsoLifetime: 30000,
  //       UserCodeType: null,
  //       DeviceCodeLifetime: 300,
  //       NonEditable: false
  //     }
  //   }
  // }
  mounted() {
    this.$set(this.refDataForm, 'dataForm', this.$refs.dataForm)
  }
}
</script>
