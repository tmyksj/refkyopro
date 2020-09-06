# AtCoder Regular Contest 051
## B - 互除法
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int k;
    cin >> k;

    vector<long long> a(4);
    a[0] = 1;
    a[1] = 1;
    a[2] = 1;
    a[3] = 0;

    for (int i = 0; i < k; i++) {
        vector<long long> b(4);
        b[0] = a[0] + a[1];
        b[1] = a[0];
        b[2] = a[2] + a[3];
        b[3] = a[2];
        a = b;
    }

    cout << a[0] << " " << a[2] << endl;
}
```
