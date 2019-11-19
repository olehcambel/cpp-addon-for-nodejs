#include <node.h>

void Sum(const v8::FunctionCallbackInfo<v8::Value> &args)
{
    v8::Isolate *isolate = args.GetIsolate();

    long int i;
    double pi = 3.1415926, e = 2.718;

    // for (i = 0; i < 100000000; i++)
    for (i = 0; i < 10000000000; i++)
    {
        pi += e;
    }

    auto total = v8::Number::New(isolate, pi);

    args.GetReturnValue().Set(total);
}

void Initialize(v8::Local<v8::Object> exports)
{
    NODE_SET_METHOD(exports, "sum", Sum);
}

NODE_MODULE(addon, Initialize)
