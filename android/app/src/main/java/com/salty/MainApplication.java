package com.salty;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.devfd.RNGeocoder.RNGeocoderPackage;
import com.lugg.ReactNativeConfig.ReactNativeConfigPackage;
import com.horcrux.svg.SvgPackage;
import com.azendoo.reactnativesnackbar.SnackbarPackage;
import com.airbnb.android.react.maps.MapsPackage;
import org.devio.rn.splashscreen.SplashScreenReactPackage;
import io.sentry.RNSentryPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.cboy.rn.splashscreen.SplashScreenReactPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNGeocoderPackage(),
            new ReactNativeConfigPackage(),
            new SvgPackage(),
            new SnackbarPackage(),
            new MapsPackage(),
            new SplashScreenReactPackage(),
            new RNSentryPackage(MainApplication.this),
            new LinearGradientPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
