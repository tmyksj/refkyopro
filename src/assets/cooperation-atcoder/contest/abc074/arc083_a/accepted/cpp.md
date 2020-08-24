# AtCoder Beginner Contest 074
## C - Sugar Water
```cpp
#include <iostream>

using namespace std;

int main() {
    int a, b, c, d, e, f;
    cin >> a >> b >> c >> d >> e >> f;

    int r_wat = 100 * a, r_sug = 0;
    for (int i = 0; i <= f; i += 100 * a) {
        for (int j = 0; i + j <= f; j += 100 * b) {
            for (int k = 0; i + j + k <= f; k += c) {
                for (int l = 0; i + j + k + l <= f; l += d) {
                    int wat = i + j;
                    int sug = k + l;

                    if (wat > 0
                            && wat / 100 * e >= sug
                            && static_cast<double>(r_sug) / (r_wat + r_sug)
                                    < static_cast<double>(sug) / (wat + sug)) {
                        r_wat = wat;
                        r_sug = sug;
                    }
                }
            }
        }
    }

    cout << (r_wat + r_sug) << " " << r_sug << endl;
}
```
